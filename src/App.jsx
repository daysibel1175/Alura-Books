import Header from './components/Header'
import AppStyled  from './assets/AppStyled.jsx'
import Pesquisa from './components/Pesquisa.jsx'
import Lancamentos from './components/Lancamentos.jsx'
function App() {

  return (
    <AppStyled>
       <Header/>
       <Pesquisa/>
       <Lancamentos/>
    </AppStyled>
  )
}

export default App
