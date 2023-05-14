import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

import Guess from "../Guess/Guess";
import "./GuessResults.css";

function GuessResults({
  answer,
  guessList
}) {
  const tableRows = range(NUM_OF_GUESSES_ALLOWED);
 
  return <div className="guess-results">
    {
      tableRows.map((row) =>
        <Guess
          key={row}
          guess={guessList[row]}
          answer={answer} />
      )
    }
  </div>;
}

export default GuessResults;
