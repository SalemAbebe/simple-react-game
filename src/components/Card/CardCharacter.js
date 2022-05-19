import React, { useState } from "react";
import data from "../../data";
import "./Card.css";

function CardCharacter(props) {
  const [flipCharacter, setFlipCharacter] = useState(false);
  const setChoiceCharacter = props.setChoiceCharacter;
  // const setFlipCharacter = props.setFlipCharacter;
  // const flipCharacter = props.flipCharacter;
  const id = props.id;

  //flip character card
  const flipCardCharacter = () => {
    const flipTracker = props.flipTracker;
    setFlipCharacter(!flipCharacter);
    setChoiceCharacter(id);
    console.log(id);
    //setting flip tracking data need to handle it in the parent. now the array needs to be used by the carousel.
    props.setFlipTracker(
      flipTracker?.map((result) => {
        if (result.id === id) {
          return {
            id: id,
            flip: true,
          };
        }
        props.setFlipTracker(newTracker);
      })
    );
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
