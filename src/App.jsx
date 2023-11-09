import GlobalStyles from './components/styles/Global'
import { Container } from './components/styles/Container.styled'

function App () {
  return (
    <Container>
      <GlobalStyles />
      <h1>Verify Your Number</h1>
      <p>Enter the OTP we sent to +7-111-111-11-11</p>
    </Container>
  )
}

export default App
