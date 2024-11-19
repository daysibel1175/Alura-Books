/* eslint-disable react/prop-types */
import {Card, Subtitulo, Descricao, ImgLivro, Botao} from '../assets/CardsStyled'
import {Titulo} from '../assets/Titulo'
function CardRecomenda( { titulo, subtitulo, descricao, img}){

return(
    <Card>
      <div>
         <Titulo cor="#EB9B00" alinhamento="left">{titulo}</Titulo>
  <Subtitulo>{subtitulo}</Subtitulo>
  <Descricao>
  {descricao}
  </Descricao>
      </div>
  <div>
     <ImgLivro src={img} alt="" />
  <Botao>Saiba mais</Botao>
  </div>
 
  </Card>
)
}
export default CardRecomenda