import React, { useState } from "react";
import data from "../../../data";
// import Card from "../../Card/Card";
import CardCharacter from "../../Card/CardCharacter";
import "./Characters.css";

function Character(props) {
  const setChoiceCharacter = props.setChoiceCharacter;
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
        />
      ))}
    </div>
  );
}

export default Character;
