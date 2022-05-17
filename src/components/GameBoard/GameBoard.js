import React from "react";
import "./GameBoard.css";
import Names from "./Names/Names";
import Characters from "./Characters/Characters";

function GameBoard() {
  return (
    <div className="gameWrapper">
      <Names />
      <div className="characterWrapper">
        <Characters />
        <div className="points">
          <div className="attempts">
            <h4>Attempts: </h4>
          </div>
          <div className="scores">
            <h4>scores:</h4>
          </div>
          <div>
            {/* <button onClick={shuffleCards}>New Game</button> */}
            <button>New Game</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
