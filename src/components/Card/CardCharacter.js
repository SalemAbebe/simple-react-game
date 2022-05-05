import React from "react";
import data from "../../data";
import Card from "./Card";

function CardCharacter() {
  return (
    <div>
      CardCharacter
      {data.map((data) => (
        <Card img={data.image} id={data.id} />
      ))}
    </div>
  );
}

export default CardCharacter;
