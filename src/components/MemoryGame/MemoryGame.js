import React, { useEffect, useState } from 'react'
import { GameCanvas } from '../../design/main'
import { cardArray } from '../../data/memorygame'
import hideItem from '../../assets/gray.png'
import { GameBoard } from '../../design/MemoryGame'
const boardArray=cardArray.concat(cardArray)

export const MemoryGame = () => {
    useEffect(() => {
        document.title = 'Memory Game';
        console.log(boardArray)
        boardArray.sort(() => 0.5 - Math.random())
        console.log(boardArray)

    }, [])

    // const [score, setScore] = useState(0)
    // const [moves, setMoves] = useState(0)
    // const [choices, setChoices] = useState([])

    // const chosenCardsIDs = []

    const genarateBoard = () => {
        console.log('----')
        return boardArray.map((card, i) => (
            <img
                key={i}
                src={hideItem}
                alt='hideItem'
                id={card.name}
                
                onClick={flipCard} />
        ))
    }

    const flipCard = (e) => {
        let cardID = e.target.id
        console.log(cardID)

    }

    // const checkMatch = () => {

    // }
    // const startGame=()=>{
        const cards = genarateBoard()

    // }
    return (
        <GameCanvas>
                 {/* <button onClick={startGame}>start</button> */}
            <GameBoard>
                {cards}
            </GameBoard>
        </GameCanvas>
    )
}
