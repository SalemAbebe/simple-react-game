import React, { useState } from "react";
import "./Card.css";

function CardName(props) {
  const [flipName, setFlipName] = useState(false);
  const choiceName = props.choiceName;
  const setChoiceName = props.setChoiceName;
  const id = props.id;
  const flipCardName = () => {
    setFlipName(!flipName);

    setChoiceName(id);
  };
  console.log(id);

  // console.log(id);

  return (
    <div className="flip-card-container">
      <div className={`flip-card ${flipName ? "flip" : ""}`}>
        <div className="flip-card-front" onClick={flipCardName}>
          <p> {props.cardFront} </p>
        </div>
        <div className="flip-card-back">
          <p>{props.name}</p>
        </div>
      </div>
    </div>
  );
}

export default CardName;
