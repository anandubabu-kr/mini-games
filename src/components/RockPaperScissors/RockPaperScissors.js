import React, { useCallback, useEffect, useState } from "react";
import { Container, GameCanvas } from "../../design/main";
import {
  Choices,
  ChoiceButton,
  GameStatusBoard,
} from "../../design/RockPaperScissores";
import rock from "../../assets/rockPaperScissores/rock.svg";
import paper from "../../assets/rockPaperScissores/paper.svg";
import cut from "../../assets/rockPaperScissores/cut.svg";

export const RockPaperScissors = () => {
  const [score, setScore] = useState({ user: 0, computer: 0 });

  useEffect(() => {
    document.title = "Rock Paper Scissores";
  });
  const updateScore = useCallback ((user, computer) => {
    const uScore = score.user + user;
    const cScore = score.computer + computer;

    setScore({ ...score, user: uScore, computer: cScore });
  },[score]);

  return (
    <Container>
      <header>
        <h1>Rock Paper Scissores</h1>
        <div>
          Your score : {score.user} <br />
          Computer score: {score.computer}
        </div>
      </header>
      <Game updateScore={updateScore} />
    </Container>
  );
};

const Game = ({ updateScore }) => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("Let's Start");

  const clickHandler = (userChoice) => {
    setUserChoice(userChoice);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randumNumber = Math.floor(Math.random() * 3) + 1;
    switch (randumNumber) {
      case 1:
        setComputerChoice({ choice: "rock", img: rock });
        break;
      case 2:
        setComputerChoice({ choice: "scissors", img: cut });
        break;
      case 3:
        setComputerChoice({ choice: "paper", img: paper });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (computerChoice === "" && userChoice === "") return;
    let computerchoictext = computerChoice.choice;
    if (computerchoictext === userChoice) {
      setResult("It's a draw !!");
      updateScore(1, 1);
    } else if (computerchoictext === "scissors" && userChoice === "paper") {
      setResult("Computer won 😯\n Hard luck");
      updateScore(0, 2);
    } else if (userChoice === "scissors" && computerchoictext === "paper") {
      setResult("You  won 🤩\n ");
      updateScore(2, 0);
    } else if (computerchoictext === "rock" && userChoice === "scissors") {
      setResult("Computer won 😯\n Hard luck");
      updateScore(0, 2);
    } else if (userChoice === "rock" && computerchoictext === "scissors") {
      setResult("You  won 🤩\n ");
      updateScore(2, 0);
    } else if (computerchoictext === "paper" && userChoice === "rock") {
      setResult("Computer won 😯\n Hard luck");
      updateScore(0, 2);
    } else if (userChoice === "paper" && computerchoictext === "rock") {
      setResult("You  won 🤩\n ");
      updateScore(2, 0);
    }
  }, [computerChoice, userChoice]);

  return (
    <div>
      <GameStatusBoard>
        <ChoiceButton disabled style={{ margin: "auto" }}>
          <img src={computerChoice.img} alt={computerChoice.choice} />
          {computerChoice.choice}
        </ChoiceButton>
        <h3>{result}</h3>
      </GameStatusBoard>
      <GameCanvas>
        <Choices>
          <ChoiceButton onClick={() => clickHandler("rock")}>
            <img src={rock} alt="Rock" />
            Rock
          </ChoiceButton>
          <ChoiceButton onClick={() => clickHandler("paper")}>
            <img src={paper} alt="Paper" />
            Paper
          </ChoiceButton>
          <ChoiceButton onClick={() => clickHandler("scissors")}>
            <img src={cut} alt="Scissores" />
            Scissors
          </ChoiceButton>
        </Choices>
      </GameCanvas>
    </div>
  );
};
