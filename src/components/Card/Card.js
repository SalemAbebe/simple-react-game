import React from "react";
import "./Card.css";

function Card(props) {
  const flipCardContainer = document.querySelector(".flip-card-container");
  flipCardContainer.addEventListener("click", () => {
    flipCardContainer.classList.toggle("flip");
  });
  return (
    <div className="flip-card-container">
      <div className="flip-card">
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
