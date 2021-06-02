import React from "react";
import rock from "../../images/rock.png";
import paper from "../../images/paper.png";
import scissors from "../../images/scissors.png";
import question from "../../images/question.png"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import './ChoiceCard.css'

function ChoiceCard(props) {
  return (
    <Card style={{ width: '18rem'}} className="pb-2 pt-2 choice-card text-center" border={props.winner === "win" ? "success" : props.winner === "loss" ? "danger" : "dark"}>
        <Card.Body>
            <h2 className="text-center">{props.title}</h2>
            <Image src={props.shape === 'rock' ? rock : props.shape === 'paper' ? paper : props.shape === 'scissors' ? scissors : props.shape === 'question' ? question : question} alt={props.shape} roundedCircle/>
            <h2 className="text-center h3">{props.winner}</h2> 
            <h2>{props.score}</h2>
        </Card.Body>
    </Card>
  );
}

// {winner === 1 && <h2 className="text-success font-weight-bold">Won</h2>}
// {winner === -1 && <h2 className="text-danger font-weight-bold">Lost</h2>}
// {winner === 0 && <h2 className="font-weight-bold">Tie</h2>}

export default ChoiceCard;


  //   <img src={props.shape === 'rock' ? rock : props.shape === 'paper' ? paper : scissors} alt={props.shape} />