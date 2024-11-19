import InputStyled from '../assets/InputStyled';
import { PesquisaStyled, Subtitulo, Resultado } from '../assets/PesquisaStyled';
import {Titulo} from '../assets/Titulo'
import { useState } from 'react';
import { livros } from './Livros';

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const [textoDigitado, setTextoDigitado] = useState("");

  const handleChange = (evento) => {
    const texto = evento.target.value;
    setTextoDigitado(texto);
    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(texto));
    setLivrosPesquisados(resultadoPesquisa);
  };

  return (
    <PesquisaStyled>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <InputStyled
        placeholder="Escreva sua próxima leitura"
        onChange={handleChange}
      />
      {textoDigitado && livrosPesquisados.length > 0 && (
        livrosPesquisados.map((livro, index) => (
          <Resultado key={index}>
            <img src={livro.src} alt={livro.nome} />
            <p>{livro.nome}</p>
          </Resultado>
        ))
      )}
    </PesquisaStyled>
  );
}

export default Pesquisa;
