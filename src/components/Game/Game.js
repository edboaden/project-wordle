import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

// components
import GuessList from "../GuessList/GuessList";
import GuessInput from "../GuessInput/GuessInput";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [list, setList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("active");

  return (
    <>
      {gameStatus !== "active" && (
        <Banner
          answer={answer}
          numOfGuesses={list.length}
          gameStatus={gameStatus}
        />
      )}
      <GuessList list={list} answer={answer} />
      <GuessInput
        list={list}
        setList={setList}
        answer={answer}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
      />
    </>
  );
}

export default Game;
