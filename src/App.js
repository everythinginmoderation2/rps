import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicNavBar from "./Components/PublicNavbar/PublicNavbar";
import ChoiceCard from "./Components/ChoiceCard/ChoiceCard";
import CardDeck from "react-bootstrap/CardDeck";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import React, { useState } from "react";

function App() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [playerResult, setPlayerResult] = useState("Choose!");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerChoice, setComputerChoice] = useState("");
  const [computerResult, setComputerResult] = useState("Waiting...");
  const [computerScore, setComputerScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [name, setName] = useState("")

  const shapes = ["rock", "paper", "scissors"];

  const calculateWinner = (playerChoice, computerChoice) => {
    // compare playerChoice and computerChoice and assign 'tie', 'win' or 'loss' to computerResult and playerResult
    if (playerChoice === computerChoice) {
      setComputerResult("tie");
      setPlayerResult("tie");
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
      setComputerResult("loss");
      setPlayerResult("win");
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === "rock" && computerChoice === "paper") {
      setComputerResult("win");
      setPlayerResult("loss");
      setComputerScore(computerScore + 1);
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      setComputerResult("loss");
      setPlayerResult("win");
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      setComputerResult("win");
      setPlayerResult("loss");
      setComputerScore(computerScore + 1);
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      setComputerResult("loss");
      setPlayerResult("win");
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      setComputerResult("win");
      setPlayerResult("loss");
      setComputerScore(computerScore + 1);
    }
    newHighScore(playerScore)
    flawlessVictory(playerScore, computerScore)
  };

  const flawlessVictory = (playerScore, computerScore) => {
    if((playerScore - computerScore) > 3) {
      setPlayerResult('FlawlessVictory')
    }
    if((computerScore - playerScore) > 3) {
      setComputerResult('FlawlessVictory')
    }
  }

  const newHighScore = (playerScore) => {
    if (playerScore > highScore)  {
      setHighScore(playerScore)
    }
  }
  
  const randomMove = (move) => {
    const newComputerChoice = shapes[Math.floor(Math.random() * 3)];
    setPlayerChoice(move);
    setComputerChoice(newComputerChoice);
    calculateWinner(move, newComputerChoice);
  };
 const reset = () => {
   setPlayerResult("Choose!")
   setPlayerScore(0)
   setPlayerChoice("question")
   setComputerResult("Waiting...")
   setComputerScore(0)
   setComputerChoice("question")
 }
 
  return (
    <div className="App">
      <PublicNavBar />
      <Row className="justify-content-md-center">
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control placeholder="enter your name" onChange={(e)=>{setName(e.target.value)}}/>
          <Form.Text className="h3 my-4 border">High Score: {highScore}</Form.Text>
        </Form.Group>
        <CardDeck>
          <Col>
            <ChoiceCard
              winner={playerResult}
              title={name}
              shape={playerChoice}
              score={playerScore}
            />
          </Col>
          <Col>
            <ChoiceCard
              winner={computerResult}
              title="Computer"
              shape={computerChoice}
              score={computerScore}
            />
          </Col>
        </CardDeck>
      </Row>
      <Container className="my-auto">
        <Row className="justify-content-md-center my-4">
          <ButtonGroup>
            <Button
              variant="outline-dark"
              className="mx-1"
              onClick={() => randomMove("rock")}
            >
              Play 👊
            </Button>
            <Button
              variant="outline-dark"
              className="mx-1"
              onClick={() => randomMove("paper")}
            >
              Play 🤚
            </Button>
            <Button
              variant="outline-dark"
              className="mx-1"
              onClick={() => randomMove("scissors")}
            >
              Play ✌
            </Button>
            <Button variant="outline-success" className="mx-1" onClick={reset}>Reset</Button>
          </ButtonGroup>
        </Row>
      </Container>
    </div>
  );
}

export default App;
