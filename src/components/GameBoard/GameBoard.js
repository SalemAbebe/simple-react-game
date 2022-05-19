import React, { useState, useEffect } from "react";
import "./GameBoard.css";
import data from "../../data";
import Names from "./Names/Names";
import Characters from "./Characters/Characters";

function GameBoard() {
  const [flipCharacter, setFlipCharacter] = useState(false);

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceName, setChoiceName] = useState(false);
  const [choiceCharacter, setChoiceCharacter] = useState(false);
  const [score, setScore] = useState(0);
  const [flipTracker, setFlipTracker] = useState({});
  const [cardsFlipped, setCardsFlipped] = useState(false);

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
    // console.log(array);
    return array;
  }
  // console.log(cards, turns);
  // console.log(choiceName);
  // console.log(choiceCharacter);

  const cardCompare = () => {
    //check if both cards have same id and add 1 point to score
    if (choiceName === choiceCharacter) {
      // console.log(true);
      setScore(score + 1);
    } else {
      // console.log(false);
      setChoiceName("");
      setChoiceCharacter("");
      setFlipCharacter(false);
    }

    //
  };

  useEffect(() => {
    // console.log("render");
    // const dataId = data.map(({ id }) => {
    //   return { id: id, flip: false };
    // });
    const dataId = data.reduce(
      (tracker, current) => ({
        ...tracker,
        [current.id]: { choiceName: false, choiceCharacter: false },
      }),
      {}
    );
    // console.log(dataId);

    setFlipTracker(dataId);
  }, []);

  function runFail(tracker) {
    setCardsFlipped(true);
    console.log(tracker);
    setTimeout(() => {
      let copy = JSON.parse(JSON.stringify(flipTracker));
      console.log(copy);
      copy[tracker].choiceName = false;
      copy[tracker].choiceCharacter = false;
      // console.log(copy[tracker]);
      setFlipTracker(copy);
      setCardsFlipped(false);
    }, 1000);
  }

  useEffect(() => {
    let copy = JSON.parse(JSON.stringify(flipTracker));
    if (choiceName && choiceCharacter) {
      setChoiceName(false);
      setChoiceCharacter(false);
      Object.keys(flipTracker).forEach((tracker) => {
        console.log(tracker);
        console.log(tracker);
        if (
          flipTracker[tracker].choiceName &&
          flipTracker[tracker].choiceCharacter
        ) {
          setScore(score + 1);
        } else {
          // runFail(tracker);
          // console.log("panda");
          setCardsFlipped(true);
          setTimeout(() => {
            copy[tracker].choiceName = false;
            copy[tracker].choiceCharacter = false;
            // console.log(copy[tracker]);
            setFlipTracker(copy);
            setCardsFlipped(false);
          }, 1000);

          // console.log(copy);
        }
      });
    }
    console.log(copy);
  }, [choiceName, choiceCharacter, flipTracker]);

  return (
    <div className="gameWrapper">
      <Names
        choiceName={choiceName}
        setChoiceName={setChoiceName}
        flipTracker={flipTracker}
        setFlipTracker={setFlipTracker}
        cardsFlipped={cardsFlipped}
      />
      <div className="characterWrapper">
        <Characters
          setFlipCharacter={setFlipCharacter}
          flipCharacter={flipCharacter}
          choiceCharacter={choiceCharacter}
          setChoiceCharacter={setChoiceCharacter}
          flipTracker={flipTracker}
          setFlipTracker={setFlipTracker}
          cardsFlipped={cardsFlipped}
        />
        <div className="points">
          <div className="attempts">
            <h4>Attempts: </h4>
            {/* <button onClick={cardCompare}> check </button> */}
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
