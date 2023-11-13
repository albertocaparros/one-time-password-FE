/* eslint-disable react/prop-types */
import { Container } from '../styles/Container.styled'
import { Navigation } from '../styles/Navigation.styled'
import { VerificationBox } from '../styles/VerificationBox.styled'
import { Tag, TitleTag } from '../styles/Tag.styled'
import OpenArrowLeft from '../icons/OpenArrowLeft'
import Verification from '../Verification'

function VerificationPage ({ verify }) {
  return (
    <Container>
      <Navigation><OpenArrowLeft /> Back</Navigation>
      <VerificationBox>
        <TitleTag>Verify Your Number</TitleTag>
        <Tag color='dimgrey'>Enter the OTP we sent to +7-111-111-11-11</Tag>
        <Verification verify={verify} />
      </VerificationBox>
    </Container>
  )
}

export default VerificationPage
