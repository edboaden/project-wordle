import React from "react";

function Banner({ answer, numOfGuesses, gameStatus }) {
  let message = "";

  // if (gameStatus === "active") return;

  if (gameStatus === "win") {
    message = (
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    );
  } else if (gameStatus === "lose") {
    message = (
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    );
  }
  return <div className={`banner ${gameStatus}`}>{message}</div>;
}

export default Banner;
