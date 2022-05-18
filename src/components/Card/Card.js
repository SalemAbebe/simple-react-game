import React, { useState } from "react";
// import data from "../../data";
import "./Card.css";

function Card(props) {
  const [flip, setFlip] = useState(false);
  const choiceName = props.choiceName;
  const setChoiceName = props.setChoiceName;
  const setChoiceCharacter = props.setChoiceCharacter;

  const id = props.id;
  const flipCard = (data) => {
    setFlip(!flip);
    setChoiceName(id);

    // console.log(id);
  };

  return (
    <div className="flip-card-container">
      <div className={`flip-card ${flip ? "flip" : ""}`} onClick={flipCard}>
        <div
          className="flip-card-front"
          onClick={() => {
            setChoiceCharacter(props.id);
          }}
        >
          <p
            onClick={() => {
              setChoiceName(props.id);
            }}
          >
            {" "}
            {props.cardFront}{" "}
          </p>
          {/* <p>{props.id}</p> */}
        </div>
        <div className="flip-card-back">
          <p>{props.name}</p>
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
