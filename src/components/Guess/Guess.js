import React from "react";

import { range } from "../../utils";
import { getValidGuess } from '../../game-helpers';

function Guess({
  guess,
  answer
}) {
  const validGuess = getValidGuess(guess, answer);
  const tableCells = range(5); // Words has length of 5 letters.

  return (
    <p className="guess">
      {tableCells.map((cell) =>
        <span key={cell} className={`cell ${validGuess[cell].status}`}>
          {validGuess[cell].letter}
        </span>
      )}
    </p>
  );
}

export default Guess;
