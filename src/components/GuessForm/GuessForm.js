import React from "react";

import "./GuessForm.css";

function GuessForm({
  gameStatus,
  submitGuess
}) {
  const [guess, setGuess] = React.useState("");

  function handleGuessChanges(event) {
    const newGuess = event.target.value;
    setGuess(newGuess);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const userGuess = guess.toUpperCase();
    if (userGuess.length < 5) {
      return;
    }

    submitGuess(userGuess);

    setGuess('');
  }

  return <form className="guess-form-wrapper" onSubmit={(event) => handleSubmit(event)}>
    <label className="guess-form-label" htmlFor="guess">Enter guess:</label>
    <input className="guess-form-input"
      value={guess}
      type="text"
      id="guess"
      maxLength={5}
      onChange={handleGuessChanges}
      disabled={gameStatus !== "running"} />
  </form>;
}

export default GuessForm;
