import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from '../design/main'

export const Home = () => {
    return (
        <Container>
            <header>
                <h1>
                    <span>
                        Welcome to
                    </span>
                    Bambooo Games
                </h1>
                <p>
                    Pick your fevorit game and enjoy !
                </p>
            </header>
            <menu>
                <li>
                    <NavLink to='memory-game'>MemoryGame</NavLink>
                </li>
                <li>
                    <NavLink to='tic-tac-toe'>Tic Tack Toe</NavLink>
                </li>
                <li>
                    <NavLink to='rock-paper-scissores'>Rock Paper Scissores</NavLink>
                </li>
                <li>
                    <NavLink to='hit-a-mole'>Hit the Mole</NavLink>
                </li>
            </menu>
        </Container>
    )
}
