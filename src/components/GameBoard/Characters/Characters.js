import React, { useState, useEffect } from "react";
import data from "../../../data";
// import Card from "../../Card/Card";
import CardCharacter from "../../Card/CardCharacter";
import "./Characters.css";

function Character(props) {
  const [flipTracker, setFlipTracker] = useState({});
  const flipCharacter = props.flipCharacter;
  const setFlipCharacter = props.setFlipCharacter;
  const setChoiceCharacter = props.setChoiceCharacter;
  useEffect(() => {
    const dataId = data.map(({ id }) => {
      return { id: id, flip: false };
    });
    setFlipTracker(dataId);
  }, []);
  return (
    <div className="charactersGrid">
      {data.map((data) => (
        <CardCharacter
          className="cardPick"
          cardFront={data.cardFront}
          img={data.image}
          key={data.id}
          id={data.id}
          setChoiceCharacter={setChoiceCharacter}
          setFlipTracker={setFlipTracker}
          flipTracker={flipTracker}
        />
      ))}
    </div>
  );
}

export default Character;
