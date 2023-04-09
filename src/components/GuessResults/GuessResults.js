import React from "react";

function GuessResults({
  guessList
}) {

  return <div className="guess-results">
    {guessList.map((guess, index) =>
      <div
        key={index}
        className="guess">
          {guess}
      </div>
    )}
  </div>;
}

export default GuessResults;
