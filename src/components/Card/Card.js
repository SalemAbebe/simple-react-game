import React, { useState } from "react";
import "./Card.css";

function Card(props) {
  const [flip, setFlip] = useState(false);

  return (
    <div className="flip-card-container">
      <div
        className={`flip-card ${flip ? "flip" : ""}`}
        onClick={() => setFlip(!flip)}
      >
        <div className="flip-card-front">
          <p> {props.cardFrontDisplay} </p>
        </div>
        <div className="flip-card-back">
          <p>{props.characterName}</p>
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
