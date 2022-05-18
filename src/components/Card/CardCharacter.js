import React, { useState } from "react";
import "./Card.css";

function CardCharacter(props) {
  const [flipCharacter, setFlipCharacter] = useState(false);
  const setChoiceCharacter = props.setChoiceCharacter;
  const id = props.id;

  //flip character card
  const flipCardCharacter = (props) => {
    setFlipCharacter(!flipCharacter);
    setChoiceCharacter(id);
  };

  return (
    <div className="flip-card-container">
      <div className={`flip-card ${flipCharacter ? "flip" : ""}`}>
        <div className="flip-card-front" onClick={flipCardCharacter}>
          <p> {props.cardFront} </p>
          <p>{props.id}</p>
        </div>
        <div className="flip-card-back">
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CardCharacter;
