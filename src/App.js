import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container,MainContainer } from './design/main';
import { Home } from './pages/Home';
import { MemoryGame } from './components/MemoryGame/MemoryGame';
import { TicTacToe } from './components/TicTacToeGame/TicTacToe';
import { RockPaperScissors } from './components/RockPaperScissors/RockPaperScissors';
import { Footer } from './pages/Footer';
import { NavBar } from './pages/NavBar';

function App() {
  return (
    <MainContainer>
      <NavBar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='memory-game' exact element={<MemoryGame/>}/>
        <Route path='tic-tac-toe' element={<TicTacToe/>}/>
        <Route path='rock-paper-scissores' element={<RockPaperScissors/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        {/* <Route path='' element={}/> */}
      </Routes>
      <Footer/>
    </MainContainer>
  );
}


export const ErrorPage = () => {
  return (
    <Container>Sorry This game is not available</Container>
  )
}


export default App;
