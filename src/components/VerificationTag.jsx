/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Tag } from './styles/Tag.styled'
import { ActionText } from './styles/ActionText.styled'

function VerificationTag ({ status }) {
  const [message, setMessage] = useState()
  const [messageColor, setMessageColor] = useState('dimgrey')
  const [timer, setTimer] = useState({ show: false, countdown: 0 })
  const [firstShowTimer, setFirstTimer] = useState(30)

  const HandleNewOtpRequest = () => {
    setTimer({ show: true, countdown: 59 })
  }

  useEffect(() => {
    firstShowTimer > 0 && setTimeout(() => {
      setFirstTimer(firstShowTimer - 1)
    }, 1000)
  }, [firstShowTimer])

  useEffect(() => {
    timer.countdown > 0 && setTimeout(() => {
      if (timer.countdown === 1) {
        setTimer({ show: false, countdown: 0 })
      } else {
        setTimer({ show: true, countdown: timer.countdown - 1 })
      }
    }, 1000)
  }, [timer])

  useEffect(() => {
    switch (status) {
      case 'correct':
        setMessage(<p>✅ OTP is correct</p>)
        setMessageColor('green')
        break
      case 'wrong':
        setMessage(<p>Seems that entered OTP is not correct</p>)
        setMessageColor('red')
        break
      case 'wrong-paste':
        setMessage(<p>The pasted content is not a valid OTP</p>)
        setMessageColor('red')
        break
      default:
        setMessage(<p>Having trouble? <ActionText color='blue' onClick={HandleNewOtpRequest}>Request a new OTP</ActionText></p>)
        setMessageColor('dimgrey')
    }
  }
  , [status])

  return (
    <>
      {firstShowTimer === 0
        ? timer.show
          ? <Tag color={messageColor}><p>Having trouble? Request a new OTP in 0:{timer.countdown < 10 ? '0' : ''}{timer.countdown}</p></Tag>
          : <Tag color={messageColor}>{message}</Tag>
        : <p />}
    </>
  )
}

export default VerificationTag
