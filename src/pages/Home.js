import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, GameSetMenu } from "../design/main";
import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../services/redux/slices/userSlice";

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
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserName("The Nice Guy"));
  }, [dispatch]);
  return (
    <Container>
      <header>
        <h1>
          <span>Welcome to</span>
          paperfan Games
        </h1>
        <p>Pick your fevorit game and enjoy !</p>
        <p>{user}</p>
      </header>
      <GameSetMenu>
        {gameroutes.map((link, index) => (
          <li key={index}>
            <NavLink to={link.path}>{link.title}</NavLink>
          </li>
        ))}
      </GameSetMenu>
    </Container>
  );
};
