import React from "react";

import { range } from "../../utils.js";
import { NUM_OF_CHARS } from "../../constants.js";
import { checkGuess } from "../../game-helpers";

function Guess({ word, answer }) {
  const wordStatus = checkGuess(word, answer);
  // if (word === answer) {
  //   setGameStatus("win");
  // }

  return (
    <li className="guess">
      {range(NUM_OF_CHARS).map((index) => (
        <span
          className={`cell ${word ? wordStatus[index].status : ""}`}
          key={index}
        >
          {word && wordStatus[index].letter}
        </span>
      ))}
    </li>
  );
}

export default Guess;
