import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div class="flip-card-container">
      <div class="flip-card">
        <div class="flip-card-front">
          <p> Pick Me! </p>
        </div>
        <div class="flip-card-back">
          <p>{props.characterName}</p>
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
