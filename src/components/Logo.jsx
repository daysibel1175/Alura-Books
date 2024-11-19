import logo from '../images/logo.svg'
import LogoStyled from '../assets/LogoStyled'

function Logo() {

  return (
  <LogoStyled>
    <img src={logo} alt="logo" />
    <p><strong>Alura</strong>Books</p>
  </LogoStyled>
  )
}

export default Logo