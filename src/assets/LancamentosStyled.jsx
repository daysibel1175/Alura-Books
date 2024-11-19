import styled from "styled-components";

export const ContainerLancamento = styled.section`
  background: #002f52;
   color: black;
   text-align: center;
   height: max-content;
   width: 100%;
`
export const LancamentoStyled = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  display: flex;
  flex-wrap: wrap; 

`;
export const LancamentoLivros = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px; 
  cursor: pointer;
  padding: 1rem;
  flex-direction: column;

  p {
    width: 100px;
    text-align: center; /* Centrar el texto */
  }
  img {
    width: 200px;
    margin-bottom: 10px; /* Espacio entre la imagen y el texto */
  }
`;
