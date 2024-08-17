import React from "react";

import { NUM_OF_CHARS, NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function GuessInput({ list, setList, answer, gameStatus, setGameStatus }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // display guess
    const nextList = [...list, guess];
    setList(nextList);

    // clear input
    setGuess("");

    // is game over?
    if (guess === answer) {
      setGameStatus("win");
    } else if (nextList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lose");
    }
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        disabled={gameStatus === "win" || gameStatus === "lose"}
        required={true}
        minLength={NUM_OF_CHARS}
        maxLength={NUM_OF_CHARS}
        pattern={`[A-Z]{${NUM_OF_CHARS}}`}
        title={`${NUM_OF_CHARS} letter word`}
        onChange={(event) => {
          const guessToUpperCase = event.target.value.toUpperCase();
          setGuess(guessToUpperCase);
        }}
      />
    </form>
  );
}

export default GuessInput;
