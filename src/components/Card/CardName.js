import React, { useState, useEffect } from "react";
import "./Card.css";

function CardName(props) {
  const [flipName, setFlipName] = useState(false);
  const choiceName = props.choiceName;
  const setChoiceName = props.setChoiceName;
  const id = props.id;
  const flipTracker = props.flipTracker;
  const setFlipTracker = props.setFlipTracker;
  const cardsFlipped = props.cardsFlipped;

  const flipCardName = () => {
    if (!cardsFlipped) {
      setChoiceName(true);
      let copy = JSON.parse(JSON.stringify(flipTracker));
      console.log(flipTracker[id]);
      copy[id].choiceName = true;
      setFlipTracker(copy);
      setFlipName(copy[id].choiceName);
      // console.log(copy);
    }

    // setChoiceName(id);
  };

  useEffect(() => {
    if (flipTracker[id] && flipTracker[id].choiceName) {
      setFlipName(true);
    } else {
      setFlipName(false);
    }
    // Object.keys(flipTracker).forEach((result, i) => {
    //   // console.log(result);
    //   // console.log(id);
    //   if (JSON.parse(result) === id) {
    //     // console.log(flipTracker[result]);
    //     if (flipTracker[result].choiceName === true) {
    //       setFlipName(true);
    //     } else {
    //       setFlipName(false);
    //     }
    //     // copy[result] = true;
    //   }
    //   // props.setFlipTracker(newTracker);
    // });
  }, [flipTracker]);

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
