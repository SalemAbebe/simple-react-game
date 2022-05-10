import React from "react";
import data from "../../data";
import Card from "./Card";
import "./CardNames.css";

function CardNames() {
  return (
    <div className="cardFlexWrapper">
      {/* CardNames */}
      <div className="cardFlex">
        <div className="cardFlex__4">
          {data.map((data) => (
            <Card characterName={data.characterName} id={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardNames;
