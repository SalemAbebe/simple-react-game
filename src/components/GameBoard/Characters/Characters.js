import React, { useState } from "react";
import data from "../../../data";
import Card from "../../Card/Card";
import "./Characters.css";

function CardCharacter() {
  return (
    <div className="charactersGrid">
      {data.map((data) => (
        <Card
          className="cardPick"
          cardFrontDisplay={data.cardFrontDisplay}
          img={data.image}
          key={data.id}
        />
      ))}
    </div>
  );
}

export default CardCharacter;
