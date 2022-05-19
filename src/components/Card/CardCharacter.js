import React, { useState, useEffect } from "react";
import data from "../../data";
import "./Card.css";

function CardCharacter(props) {
  const [flipCharacter, setFlipCharacter] = useState(false);
  const setChoiceCharacter = props.setChoiceCharacter;
  // const setFlipCharacter = props.setFlipCharacter;
  // const flipCharacter = props.flipCharacter;
  const id = props.id;
  const flipTracker = props.flipTracker;
  const setFlipTracker = props.setFlipTracker;
  const cardsFlipped = props.cardsFlipped;
  //flip character card
  const flipCardCharacter = () => {
    if (flipCharacter.length > 1 || cardsFlipped) {
      return;
    } else {
      setChoiceCharacter(true);
      //setting flip tracking data need to handle it in the parent. now the array needs to be used by the carousel.

      let copy = JSON.parse(JSON.stringify(flipTracker));
      copy[id].choiceCharacter = true;
      setFlipTracker(copy);
      setFlipCharacter(copy[id].choiceCharacter);
    }
  };

  useEffect(() => {
    // if (flipCharacter) {
    //   Object.keys(flipTracker).forEach((result, i) => {
    //     if (JSON.parse(result) === id) {
    //       console.log(flipTracker[result]);
    //       if (flipTracker[result].choiceCharacter === true) {
    //         setFlipCharacter(true);
    //       } else {
    //         setFlipCharacter(false);
    //       }
    //     }
    //   });
    //   console.log(flipTracker[id]);
    // }
    if (flipTracker[id] && flipTracker[id].choiceCharacter) {
      setFlipCharacter(true);
    } else {
      setFlipCharacter(false);
    }
  }, [flipTracker[id]]);

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
