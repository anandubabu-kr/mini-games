import React, { useEffect, useState } from 'react'
import { GameCanvas } from '../../design/main'
import { cardArray } from '../../data/memorygame'
import hideItem from '../../assets/gray.png'
import { GameBoard } from '../../design/MemoryGame'

export const MemoryGame = () => {
    useEffect(() => {
        document.title = 'Memory Game';
        cardArray.sort(() => 0.5 - Math.random())

    }, [])

    const [score, setScore] = useState(0)
    const [moves, setMoves] = useState(0)
    const [choices, setChoices] = useState([])

    const chosenCardsIDs = []

    const genarateBoard = () => {
        return cardArray.map((card, i) => (
            <img
                key={i}
                src={hideItem}
                alt='hideItem'
                id={i}
                onClick={flipCard} />
        ))
    }

    const flipCard = (e) => {
        let cardID = e.target.id
        console.log(cardID)

    }

    const checkMatch = () => {

    }

    const cards = genarateBoard()
    return (
        <GameCanvas>
            <GameBoard>
                {cards}
            </GameBoard>
        </GameCanvas>
    )
}
