/* eslint-disable react/prop-types */
import { Container } from '../styles/Container.styled'
import { VerificationBox } from '../styles/VerificationBox.styled'
import { Tag, TitleTag } from '../styles/Tag.styled'
import Verification from '../Verification'
import NavBar from '../NavBar'

function VerificationPage ({ verify }) {
  return (
    <Container>
      <NavBar>Back</NavBar>
      <VerificationBox>
        <TitleTag>Verify Your Number</TitleTag>
        <Tag color='dimgrey'>Enter the OTP we sent to +7-111-111-11-11</Tag>
        <Verification verify={verify} />
      </VerificationBox>
    </Container>
  )
}

export default VerificationPage
