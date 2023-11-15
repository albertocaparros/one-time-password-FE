import { LoaderInfoStyle } from './styles/LoaderInfo.styled'
import Spinner from './icons/Spinner'

export function LoaderInfo () {
  return (
    <LoaderInfoStyle><Spinner /> Redirecting to your account</LoaderInfoStyle>
  )
}

export function LoaderVerifying () {
  return (
    <LoaderInfoStyle><Spinner /> Verifying OTP...</LoaderInfoStyle>
  )
}
