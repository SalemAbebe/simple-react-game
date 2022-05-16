import React, { useState } from "react";
import data from "../../data";
import Card from "./Card";
import "./CardNames.css";

function CardCharacter() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = data.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setTurns(0);
  };
  console.log(cards, turns);
  return (
    <div className="cardFlexWrapper">
      <div className="cardFlex">
        <div className="cardFlex__4">
          {data.map((data) => (
            <Card
              className="cardPick"
              cardFrontDisplay={data.cardFrontDisplay}
              img={data.image}
              key={data.id}
            />
          ))}
        </div>
        <div className="points">
          <div className="attempts">
            <h4>Attempts: </h4>
          </div>
          <div className="scores">
            <h4>scores:</h4>
          </div>
          <div>
            <button onClick={shuffleCards}>New Game</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCharacter;
