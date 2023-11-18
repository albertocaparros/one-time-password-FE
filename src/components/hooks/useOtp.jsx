import { useEffect, useState } from 'react'
import { ActionText } from '../styles/ActionText.styled'
import useTimer from './useTimer'

const useOtp = (status) => {
  const { timer: newOtpTimer, setTimer: setNewOtpTimer } = useTimer()
  const { timer: firstShowTimer, setTimer: setFirstTimer } = useTimer()
  const [message, setMessage] = useState({ content: null, color: null })

  useEffect(() => { setFirstTimer(3) }, [setFirstTimer])

  useEffect(() => {
    const HandleNewOtpRequest = () => {
      let newOtp = ['0', '0', '0', '0', '0', '0']

      newOtp = newOtp.map(() => {
        return Math.floor(Math.random() * (9 - 0 + 1) + 0)
      }).join('')

      window.localStorage.setItem('otp', newOtp)
      window.alert(`The new OTP is: ${newOtp}`)

      setNewOtpTimer(59)
    }

    switch (status) {
      case 'correct':
        setMessage({ content: <>✅ OTP is correct</>, color: 'green' })
        break
      case 'wrong':
        setMessage({ content: <>Seems that entered OTP is not correct</>, color: 'red' })
        break
      case 'wrong-paste':
        setMessage({ content: <>The pasted content is not a valid OTP</>, color: 'red' })
        break
      default:
        setMessage({ content: <>Having trouble? <ActionText color='blue' onClick={HandleNewOtpRequest}>Request a new OTP</ActionText></>, color: 'dimgrey' })
    }
  }
  , [status, setNewOtpTimer])

  return { firstShowTimer, newOtpTimer, message }
}

export default useOtp
