/* eslint-disable react/prop-types */
import { Tag } from './styles/Tag.styled'
import useOtp from './hooks/useOtp'

function VerificationTag ({ status }) {
  const { firstShowTimer, newOtpTimer, message } = useOtp(status)

  return (
    <>
      {firstShowTimer === 0 || status !== 'default'
        ? newOtpTimer !== 0 && status === 'default'
          ? <Tag color='dimgrey'>Having trouble? Request a new OTP in 0:{newOtpTimer < 10 ? '0' : ''}{newOtpTimer}</Tag>
          : <Tag color={message.color}>{message.content}</Tag>
        : <p />}
    </>
  )
}

export default VerificationTag
