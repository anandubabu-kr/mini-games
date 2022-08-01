import React, { useEffect, useState } from 'react'
import { Container, GameCanvas } from '../../design/main'
import { Choices, GameStatusBoard } from '../../design/RockPaperScissores'


export const RockPaperScissors = () => {
  useEffect(() => {
    document.title = 'Rock Paper Scissores'
  })

  return (
    <Container>
      <header>
        <h1>
          Rock Paper Scissores
        </h1>
      </header>
      <Game />
    </Container>
  )
}

const Game = () => {
  const [userChoice, setUserChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  const [result, setResult] = useState('Let\'s Start')


  const clickHandler = (e) => {
    setUserChoice(e.target.id)
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randumNumber = Math.floor(Math.random() * 3) + 1
    switch (randumNumber) {
      case 1: setComputerChoice('rock')
        break;
      case 2: setComputerChoice('scissors')
        break;
      case 3: setComputerChoice('paper')
        break;
      default: break;
    }
  }

  useEffect(() => {
    if (computerChoice === '' || userChoice === '') return;
    if (computerChoice === userChoice) {
      setResult('It\'s a draw !!')
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
      setResult("Computer won 😯\n Hard luck")
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      setResult("You  won 🤩\n ")
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
      setResult("Computer won 😯\n Hard luck")
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
      setResult("You  won 🤩\n ")
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
      setResult("Computer won 😯\n Hard luck")
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      setResult("You  won 🤩\n ")
    }
  }, [computerChoice, userChoice])

  return (
    <div>
      <GameStatusBoard>
        <h3>
          {computerChoice}
        </h3>
        <h3>
          {result}
        </h3>
        <h3>
          {userChoice}
        </h3>
      </GameStatusBoard>
      <GameCanvas>
        <Choices>
          <button onClick={clickHandler} id="rock">Rock</button>
          <button onClick={clickHandler} id="paper">Paper</button>
          <button onClick={clickHandler} id="scissors">Scissors</button>
        </Choices>
      </GameCanvas>
    </div>
  )
}