import React, { useState } from "react";
import "./Card.css";

function Card(props) {
  const [flip, setFlip] = useState(false);
  // const [cards, setCards] = useState([]);
  // const [turns, setTurns] = useState(0);

  // //shuffle cards
  // const shuffleCards = () => {
  //   const shuffledCards = data.sort(() => Math.random() - 0.5);
  //   setCards(shuffledCards);
  //   setTurns(0);
  // };
  // console.log(cards, turns);

  return (
    <div className="flip-card-container">
      <div className={`flip-card ${flip ? "flip" : ""}`}>
        <div className="flip-card-front" onClick={() => setFlip(!flip)}>
          <p> {props.cardFrontDisplay} </p>
        </div>
        <div className="flip-card-back" onClick={() => setFlip(!flip)}>
          <p>{props.characterName}</p>
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
