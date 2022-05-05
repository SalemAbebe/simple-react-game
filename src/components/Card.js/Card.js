import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={props.img} alt="" />
      </div>
      <div className="productDescription">
        <div className="id">{props.id}</div>
        <div className="characterName">{props.characterName}</div>
      </div>
    </div>
  );
}

export default Card;
