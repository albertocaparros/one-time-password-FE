/* eslint-disable react/prop-types */
import { Navigation } from './styles/Navigation.styled'
import OpenArrowLeft from './icons/OpenArrowLeft'

function NavBar ({ children }) {
  return (
    <Navigation><OpenArrowLeft />{children}</Navigation>
  )
}

export default NavBar
