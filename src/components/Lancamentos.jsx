import { livrosLancados } from './LivrosLancados'; 
import { LancamentoStyled, LancamentoLivros, ContainerLancamento } from '../assets/LancamentosStyled.jsx';
import { Titulo } from '../assets/Titulo';
import CardRecomenda from './CardRecomenda.jsx'
import livro from '../images/livro.png'

function Lancamentos() { 
    return ( 
        <ContainerLancamento>
            <Titulo cor="#EB9B00" fondo="white" espacio="2rem">LANÇAMENTOS
            </Titulo>
            <LancamentoStyled> 
                {livrosLancados.map((livro, index) => (
                    <LancamentoLivros key={index}> 
                        <img src={livro.src} alt={livro.nome} /> 
                        <p>{livro.nome}</p>
                    </LancamentoLivros> 
                ))}
            </LancamentoStyled>
        <CardRecomenda
        titulo="Talvez te interesse..."
        subtitulo="REACT"
        descricao="Biblioteca mais usada"
        img={livro}
        />
        </ContainerLancamento>
    );
}

export default Lancamentos;
