import React, { useState } from "react";
import "./GameBoard.css";
import data from "../../data";
import Names from "./Names/Names";
import Characters from "./Characters/Characters";

function GameBoard() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceName, setChoiceName] = useState();
  const [choiceCharacter, setChoiceCharacter] = useState();
  const [score, setScore] = useState(0);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = shuffleArray(data);
    setCards(shuffledCards);
    setTurns(0);
  };
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
    return array;
  }
  console.log(cards, turns);
  console.log(choiceName);
  console.log(choiceCharacter);
  const cardCompare = () => {
    if (choiceName === choiceCharacter) {
      setScore(score + 1);
    }
  };

  return (
    <div className="gameWrapper">
      <Names
        // flipCard={flipCard}
        choiceName={choiceName}
        setChoiceName={setChoiceName}
      />
      <div className="characterWrapper">
        <Characters
          // flipCard={flipCard}
          choiceCharacter={choiceCharacter}
          setChoiceCharacter={setChoiceCharacter}
        />
        <div className="points">
          <div className="attempts">
            <h4>Attempts: </h4>
          </div>
          <div className="scores">
            <h4>scores:{score}</h4>
          </div>
          <div>
            <button onClick={shuffleCards}>New Game</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
