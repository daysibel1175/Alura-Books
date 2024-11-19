import styled from "styled-components";


export const Titulo = styled.h2`
   color: ${props => props.cor || '#fff'};
   font-size: ${props => props.tamanhoFont || '36px'};
   text-align: center;
   width: 100%;
   background: ${
      props => props.fondo || 'transparente'
   };
   text-align: ${props => props.alinhamento || 'center'};
   padding: ${props => props.espacio || '0'};
`