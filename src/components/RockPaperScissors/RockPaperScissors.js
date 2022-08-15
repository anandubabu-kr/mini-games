import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    document.title = "Rock Paper Scissores";
  });

  return (
    <Container>
      <header>
        <h1>Rock Paper Scissores</h1>
      </header>
      <Game />
    </Container>
  );
};

const Game = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("Let's Start");
  // const [score, setScore] = useState(0);

  const clickHandler = (event) => {
    console.log(event);
    setUserChoice(event);
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
    } else if (computerchoictext === "scissors" && userChoice === "paper") {
      setResult("Computer won 😯\n Hard luck");
    } else if (userChoice === "scissors" && computerchoictext === "paper") {
      setResult("You  won 🤩\n ");
    } else if (computerchoictext === "rock" && userChoice === "scissors") {
      setResult("Computer won 😯\n Hard luck");
    } else if (userChoice === "rock" && computerchoictext === "scissors") {
      setResult("You  won 🤩\n ");
    } else if (computerchoictext === "paper" && userChoice === "rock") {
      setResult("Computer won 😯\n Hard luck");
    } else if (userChoice === "paper" && computerchoictext === "rock") {
      setResult("You  won 🤩\n ");
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
