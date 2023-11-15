/* eslint-disable react/prop-types */
import { NumberInputs } from './styles/NumberInputs.styled'
import { NumberInput } from './styles/NumberInput.styled'
import { LoaderInfo, LoaderVerifying } from './Loaders'
import confetti from 'canvas-confetti'
import { useState, useRef } from 'react'
import VerificationTag from './VerificationTag'
import { useNavigate } from 'react-router-dom'

function Verification ({ verify }) {
  const initialInputsState = [
    { key: 0, ref: useRef(null), underlined: 'black', color: 'black' },
    { key: 1, ref: useRef(null), underlined: 'black', color: 'black' },
    { key: 2, ref: useRef(null), underlined: 'black', color: 'black' },
    { key: 3, ref: useRef(null), underlined: 'black', color: 'black' },
    { key: 4, ref: useRef(null), underlined: 'black', color: 'black' },
    { key: 5, ref: useRef(null), underlined: 'black', color: 'black' }]

  const [inputs, setInputs] = useState(initialInputsState)
  const [tagStatus, setTagStatus] = useState('default')
  const [loaderStatus, setLoaderStatus] = useState('noLoader')
  const navigate = useNavigate()

  const HandleOnKey = (key, e) => {
    if (e.key !== 'Control' && e.key !== 'v') {
      e.preventDefault()
      setTagStatus('default')
    }

    if (e.keyCode > 47 && e.keyCode < 58) {
      e.target.value = e.key
      e.target.blur()

      const nextInputs = inputs.map(input => {
        if (input.key === key) {
          input.underlined = 'blue'
          input.color = 'black'
          setTagStatus('default')
        }

        return input
      })

      setInputs(nextInputs)

      if (key === 5) {
        CheckNumber()
      } else {
        inputs[key + 1].ref.current.focus()
      }
    } else if (e.key === 'Backspace' || e.key === 'Delete') {
      e.target.value = ''
      e.target.blur()

      const nextInputs = inputs.map(input => {
        if (input.key === key) {
          input.underlined = 'black'
        }

        return input
      })
      setInputs(nextInputs)

      if (key !== 5) { inputs[key + 1].ref.current.focus() }
    }
  }

  const HandleOnPaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text')

    if (pastedData.length === 6) {
      inputs.forEach((input, index) => { input.ref.current.value = pastedData[index] })
      CheckNumber()
    } else {
      setTagStatus('wrong-paste')
    }
  }

  const CheckNumber = () => {
    let number = ''
    inputs.forEach((input) => { number += input.ref.current.value })
    setLoaderStatus('verifying')

    setTimeout(() => {
      if (number === '123456') {
        confetti()
        const nextInputs = inputs.map(input => {
          input.underlined = 'green'
          input.color = 'green'

          return input
        })
        setInputs(nextInputs)
        setTagStatus('correct')
        setLoaderStatus('redirecting')

        setTimeout(() => {
          verify(true)
          navigate('/inside')
        }, 3000)
      } else {
        const nextInputs = inputs.map(input => {
          input.underlined = 'red'
          input.color = 'red'

          return input
        })
        setInputs(nextInputs)
        setTagStatus('wrong')
        setLoaderStatus('noLoader')
      }
    }, 2000)
  }

  return (
    <>
      <NumberInputs>
        {inputs.map((element) => <NumberInput key={element.key} ref={element.ref} type='number' min='0' max='9' inputMode='numeric' onInput={(e) => HandleOnKey(element.key, e)} onKeyDown={(e) => HandleOnKey(element.key, e)} onPaste={(e) => HandleOnPaste(e)} underlined={element.underlined} color={element.color} />)}
      </NumberInputs>
      <VerificationTag status={tagStatus} />
      {loaderStatus === 'redirecting' && <LoaderInfo />}
      {loaderStatus === 'verifying' && <LoaderVerifying />}
    </>

  )
}

export default Verification
