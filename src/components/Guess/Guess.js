import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { getValidGuess } from '../../game-helpers';

function Guess({
  guess,
  answer
}) {
  const validGuess = getValidGuess(guess, answer);
  const tableCells = range(NUM_OF_GUESSES_ALLOWED - 1);

  return <p
    className="guess">
    {tableCells.map((cell) =>
      <span className={`cell ${validGuess[cell].status}`}
        key={cell}>
        {validGuess[cell].letter}
      </span>
    )}
  </p>;
}

export default Guess;
