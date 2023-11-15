/* eslint-disable react/prop-types */
import { InputsContainer } from './styles/InputsContainer.styled'
import { NumberInput } from './styles/NumberInput.styled'
import Loader from './Loader'
import VerificationTag from './VerificationTag'
import useVerification from './hooks/useVerification'

function Verification ({ verify }) {
  const { inputs, HandleOnKey, HandleOnPaste, tagStatus, loaderStatus } = useVerification({ verify })

  return (
    <>
      <InputsContainer>
        {inputs.map((element) => <NumberInput key={element.key} ref={element.ref} type='number' min='0' max='9' inputMode='numeric' onInput={(e) => HandleOnKey(element.key, e)} onPaste={(e) => HandleOnPaste(e)} underlined={element.underlined} color={element.color} />)}
      </InputsContainer>
      <VerificationTag status={tagStatus} />
      {loaderStatus === 'redirecting' && <Loader>Redirecting to your account</Loader>}
      {loaderStatus === 'verifying' && <Loader>Verifying OTP...</Loader>}
    </>
  )
}

export default Verification
