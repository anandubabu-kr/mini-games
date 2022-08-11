import React, { useEffect, useState } from 'react'
import { Container, GameCanvas } from '../../design/main'
import { Choices, GameStatusBoard } from '../../design/RockPaperScissores'
import rock from '../../assets/rockPaperScissores/rock.svg'
import paper from '../../assets/rockPaperScissores/paper.svg'
import cut from '../../assets/rockPaperScissores/cut.svg'

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


  const clickHandler = (event) => {
    console.log(event)
    setUserChoice(event)
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
    if (computerChoice === '' && userChoice === '') return;
    let computerchoictext = computerChoice//.text
    if (computerchoictext === userChoice) {
      setResult('It\'s a draw !!')
    } else if (computerchoictext === 'scissors' && userChoice === 'paper') {
      setResult("Computer won 😯\n Hard luck")
    } else if (userChoice === 'scissors' && computerchoictext === 'paper') {
      setResult("You  won 🤩\n ")
    } else if (computerchoictext === 'rock' && userChoice === 'scissors') {
      setResult("Computer won 😯\n Hard luck")
    } else if (userChoice === 'rock' && computerchoictext === 'scissors') {
      setResult("You  won 🤩\n ")
    } else if (computerchoictext === 'paper' && userChoice === 'rock') {
      setResult("Computer won 😯\n Hard luck")
    } else if (userChoice === 'paper' && computerchoictext === 'rock') {
      setResult("You  won 🤩\n ")
    }
  }, [computerChoice, userChoice])

  return (
    <div>
      <GameStatusBoard>
        <div>
          {computerChoice}
        </div>
        <h3>
          {result}
        </h3>
      </GameStatusBoard>
      <GameCanvas>
        <Choices>
          <button onClick={()=>clickHandler('rock')} >
            <img src={rock} alt='Rock' />
            Rock
          </button>
          <button onClick={()=>clickHandler('paper')} >
            <img src={paper} alt='Paper' />
            Paper
          </button>
          <button onClick={()=>clickHandler('scissors')} >
            <img src={cut} alt='Scissores' />
            Scissors
          </button>
        </Choices>
      </GameCanvas>
    </div>
  )
}