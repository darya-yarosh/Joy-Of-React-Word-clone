import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from '../../game-helpers';

function Guess({
  guess,
  answer
}) {
  const checkedGuess = guess === undefined ? [{},{},{},{},{}] : checkGuess(guess, answer);
  const formattedGuess = checkedGuess.map(guessSymbol => {
    const formattedGuessSymbol = {
      letter: guessSymbol.letter === undefined ? '' : guessSymbol.letter,
      status: guessSymbol.status === undefined ? '' : guessSymbol.status,
    } 
    return formattedGuessSymbol;
  })
  const tableCells = range(NUM_OF_GUESSES_ALLOWED - 1);

  return <p
    className="guess">
    {tableCells.map((cell) =>
      <span className={`cell ${formattedGuess[cell].status}`}
        key={cell}>
        {formattedGuess[cell].letter}
      </span>
    )}
  </p>;
}

export default Guess;
