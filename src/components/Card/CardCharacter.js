import React from "react";
import data from "../../data";
import Card from "./Card";
import "./CardNames.css";

function CardCharacter() {
  return (
    // <div>
    //   CardCharacter
    //   {data.map((data) => (
    //     <Card img={data.image} id={data.id} />
    //   ))}
    // </div>
<div className="cardFlexWrapper">
      {/* Characters */}
      <div className="cardFlex">
        <div className="cardFlex__4">
          {data.map((data) => (
            <Card img={data.image} id={data.id} />
          ))}
        </div>
      </div>
    </div>

  );
}

export default CardCharacter;
