import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

import "./GuessResults.css";

function GuessResults({
  guessList
}) {
  const tableRows = range(NUM_OF_GUESSES_ALLOWED);
  const tableCells = range(NUM_OF_GUESSES_ALLOWED-1);

  const visibleGuessList = []
  if (guessList.length !== 0) {
    guessList.forEach((element, index) => {
      visibleGuessList[index] = element;
    });
  }

  return <div className="guess-results">
    {tableRows.map((row) =>
      <p
        key={row}
        className="guess">
        {tableCells.map((cell) => 
          <span className="cell" key={cell}>
            {(visibleGuessList[row]!==undefined) && 
            visibleGuessList[row][cell]
            }
          </span>
        )}
      </p>
    )}
  </div>;
}

export default GuessResults;
