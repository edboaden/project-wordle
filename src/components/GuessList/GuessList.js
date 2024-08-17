import React from "react";

import { range } from "../../utils.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

import Guess from "../Guess/Guess";

function GuessList({ list, answer }) {
  return (
    <ol className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess word={list[index]} answer={answer} key={index} />
      ))}
    </ol>
  );
}

export default GuessList;
