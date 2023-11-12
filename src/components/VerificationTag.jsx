/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Tag } from './styles/Tag.styled'

function VerificationTag ({ status }) {
  const [message, setMessage] = useState(<p>Having trouble? <a href='#'>Request a new OTP</a></p>)
  const [messageColor, setMessageColor] = useState('dimgrey')

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
        setMessage(<p>Having trouble? <a href='#'>Request a new OTP</a></p>)
        setMessageColor('dimgrey')
    }
  }
  , [status])

  return (
    <Tag color={messageColor}>{message}</Tag>
  )
}

export default VerificationTag
