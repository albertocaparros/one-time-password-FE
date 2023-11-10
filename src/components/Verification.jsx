import { NumberInputs } from './styles/NumberInputs.styled'
import { NumberInput } from './styles/NumberInput.styled'
import confetti from 'canvas-confetti'
import { useState, useRef } from 'react'

function Verification () {
  const [inputs] = useState([
    { key: 0, ref: useRef(null) },
    { key: 1, ref: useRef(null) },
    { key: 2, ref: useRef(null) },
    { key: 3, ref: useRef(null) },
    { key: 4, ref: useRef(null) },
    { key: 5, ref: useRef(null) }])

  const HandleOnKey = (key, e) => {
    if (e.key !== 'Control' && e.key !== 'v') { e.preventDefault() }

    if (e.keyCode > 47 && e.keyCode < 58) {
      e.target.value = e.key
      e.target.blur()
      if (key === 5) { CheckNumber() } else { inputs[key + 1].ref.current.focus() }
    } else if (e.key === 'Backspace' || e.key === 'Delete') {
      e.target.value = ''
      e.target.blur()
      if (key !== 5) { inputs[key + 1].ref.current.focus() }
    }
  }

  const HandleOnPaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text')

    if (pastedData.length === 6) {
      inputs.forEach((input, index) => { input.ref.current.value = pastedData[index] })
      CheckNumber()
    }
  }

  const CheckNumber = () => {
    let number = ''
    inputs.forEach((input) => { number += input.ref.current.value })

    if (number === '007007') {
      confetti()
    }
  }

  return (
    <NumberInputs>
      {inputs.map((element) => <NumberInput key={element.key} ref={element.ref} type='number' min='0' max='9' inputMode='numeric' onKeyDownCapture={(e) => HandleOnKey(element.key, e)} onPaste={(e) => HandleOnPaste(e)} />)}
    </NumberInputs>
  )
}

export default Verification
