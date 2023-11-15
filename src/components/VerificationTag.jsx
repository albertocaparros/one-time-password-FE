/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Tag } from './styles/Tag.styled'
import { ActionText } from './styles/ActionText.styled'
import useTimer from './hooks/useTimer'

function VerificationTag ({ status }) {
  const [message, setMessage] = useState()
  const [messageColor, setMessageColor] = useState('dimgrey')
  const { timer: newOtpTimer, setTimer: setNewOtpTimer } = useTimer()
  const { timer: firstShowTimer, setTimer: setFirstTimer } = useTimer()

  const HandleNewOtpRequest = () => {
    let newOtp = ['0', '0', '0', '0', '0', '0']

    newOtp = newOtp.map(() => {
      return Math.floor(Math.random() * (9 - 0 + 1) + 0)
    }).join('')

    window.localStorage.setItem('otp', newOtp)
    window.alert(`The new OTP is: ${newOtp}`)

    setNewOtpTimer(59)
  }

  useEffect(() => { setFirstTimer(3) }, [setFirstTimer])

  useEffect(() => {
    switch (status) {
      case 'correct':
        setMessage(<>✅ OTP is correct</>)
        setMessageColor('green')
        break
      case 'wrong':
        setMessage(<>Seems that entered OTP is not correct</>)
        setMessageColor('red')
        break
      case 'wrong-paste':
        setMessage(<>The pasted content is not a valid OTP</>)
        setMessageColor('red')
        break
      default:
        setMessage(<>Having trouble? <ActionText color='blue' onClick={HandleNewOtpRequest}>Request a new OTP</ActionText></>)
        setMessageColor('dimgrey')
    }
  }
  , [status])

  return (
    <>
      {firstShowTimer === 0 || status !== 'default'
        ? newOtpTimer !== 0 && status === 'default'
          ? <Tag color='dimgrey'>Having trouble? Request a new OTP in 0:{newOtpTimer < 10 ? '0' : ''}{newOtpTimer}</Tag>
          : <Tag color={messageColor}>{message}</Tag>
        : <p />}
    </>
  )
}

export default VerificationTag
