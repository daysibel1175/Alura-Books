import {MenuStyled, ItemStyled, IconesStyled,IconeStyled} from '../assets/MenuStyled.jsx'
import perfil from '../images/perfil.svg'
import sacola from '../images/sacola.svg'

const itens = [ "Categoria", "Favoritos", "Meu Estante"];
const icones = [ perfil, sacola ];

function Menu() {

  return (
    <>
      <MenuStyled>
   {
     itens.map( (item, index) => (
      <ItemStyled key={index}>{item}</ItemStyled>
     )
    )
   }
  </MenuStyled>
  <IconesStyled>
    {
      icones.map (
        (icone, index) => (
         <IconeStyled src={icone} alt="" key={index}/>
        )
      )
    }
  </IconesStyled>
    </>

  )
}

export default Menu