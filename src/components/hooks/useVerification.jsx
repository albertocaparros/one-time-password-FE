import confetti from 'canvas-confetti'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const useVerification = ({ verify }) => {
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
    const inputType = e.nativeEvent.inputType
    const value = e.nativeEvent.data

    if (inputType === 'insertText' && value >= '0') {
      e.target.value = value
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

  return { inputs, HandleOnKey, HandleOnPaste, tagStatus, loaderStatus }
}

export default useVerification
