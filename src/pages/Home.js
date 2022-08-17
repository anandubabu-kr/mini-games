import React from "react";
import { NavLink } from "react-router-dom";
import { Container, GameSetMenu } from "../design/main";

const gameroutes = [
  {
    title: "Memory Game",
    path: "memory-game",
  },
  {
    title: "Tic Tack Toe",
    path: "tic-tac-toe",
  },
  {
    title: "Rock Paper Scissores",
    path: "rock-paper-scissores",
  },
  {
    title: "Hit the Mole",
    path: "hit-a-mole",
  },
];

export const Home = () => {
  return (
    <Container>
      <header>
        <h1>
          <span>Welcome to</span>
          paperfan Games
        </h1>
        <p>Pick your fevorit game and enjoy !</p>
      </header>
      <GameSetMenu>
        {gameroutes.map((link, index) => (
          <li key={index}>
            <NavLink to={link.path}>{link.title}</NavLink>
          </li>
        ))}
      </GameSetMenu>
      <br/>
    </Container>
  );
};
