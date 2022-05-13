import React from "react";
import data from "../../data";
import Card from "./Card";
import "./CardNames.css";

function CardCharacter() {
  return (
    <div className="cardFlexWrapper">
      <div className="cardFlex">
        <div className="cardFlex__4">
          {data.map((data) => (
            <Card
              className="cardPick"
              cardFrontDisplay={data.cardFrontDisplay}
              img={data.image}
              id={data.id}
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
        </div>
      </div>
    </div>
  );
}

export default CardCharacter;
