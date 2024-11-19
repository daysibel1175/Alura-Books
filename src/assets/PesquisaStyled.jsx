import styled from "styled-components";

export const PesquisaStyled = styled.section`
   background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
   color: #FFF;
   text-align: center;
   padding: 85px 0;
   height: auto;
   width: 100%;
`

export const Subtitulo = styled.h3`
   font-size: 16px;
   font-weight: 500;
   margin-bottom: 40px;
`
export const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 20px;
   cursor: pointer;
   padding:1rem;
   p {
       width: 200px;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`


