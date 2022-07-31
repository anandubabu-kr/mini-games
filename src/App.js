import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container,MainComtainer } from './design/main';
import { Home } from './pages/Home';
import { MemoryGame } from './components/MemoryGame/MemoryGame';
import { TicTacToe } from './components/TicTacToeGame/TicTacToe';
import { RockPaperScissors } from './components/RockPaperScissors/RockPaperScissors';
import { Footer } from './pages/Footer';

function App() {
  return (
    <MainComtainer>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='memory-game' exact element={<MemoryGame/>}/>
        <Route path='tic-tac-toe' element={<TicTacToe/>}/>
        <Route path='rock-paper-scissores' element={<RockPaperScissors/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        {/* <Route path='' element={}/> */}
      </Routes>
      <Footer/>
    </MainComtainer>
  );
}


export const ErrorPage = () => {
  return (
    <div>Sorry This game is not available</div>
  )
}


export default App;
