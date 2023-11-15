/* eslint-disable react/prop-types */
import { LoaderInfoStyle } from './styles/LoaderInfo.styled'
import Spinner from './icons/Spinner'

function Loader ({ children }) {
  return (
    <LoaderInfoStyle><Spinner />{children}</LoaderInfoStyle>
  )
}

export default Loader
