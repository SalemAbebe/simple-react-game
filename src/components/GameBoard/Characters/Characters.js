import React, { useState } from "react";
import data from "../../../data";
import Card from "../../Card/Card";
import "./Characters.css";

function CardCharacter() {
  // const [cards, setCards] = useState([]);
  // const [turns, setTurns] = useState(0);

  // //shuffle cards
  // const shuffleCards = () => {
  //   const shuffledCards = data.sort(() => Math.random() - 0.5);
  //   setCards(shuffledCards);
  //   setTurns(0);
  // };
  // console.log(cards, turns);
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
