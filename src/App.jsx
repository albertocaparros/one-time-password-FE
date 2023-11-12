import GlobalStyles from './components/styles/Global'
import { Container } from './components/styles/Container.styled'
import { Navigation } from './components/styles/Navigation.styled'
import { VerificationBox } from './components/styles/VerificationBox.styled'
import { Tag } from './components/styles/Tag.styled'
import OpenArrowLeft from './components/icons/OpenArrowLeft'
import Verification from './components/Verification'

function App () {
  return (
    <Container>
      <GlobalStyles />
      <Navigation><OpenArrowLeft /> Back</Navigation>
      <VerificationBox>
        <h2>Verify Your Number</h2>
        <Tag>Enter the OTP we sent to +7-111-111-11-11</Tag>
        <Verification />
      </VerificationBox>
    </Container>
  )
}

export default App
