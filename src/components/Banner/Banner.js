import React from "react";

function Banner({
  status,
  answer,
  guessesCount,
  restartGame
}) {

  function happyInfo() {
    return <>
      <strong>Congratulations!</strong> Got it in <strong>{guessesCount} guesses</strong>.
    </>
  }

  function sadInfo() {
    return <>
      Sorry, the correct answer is <strong>{answer}</strong>
    </>
  }

  return <div className={status + " banner"}>
    <p>
      {(status === "sad") && sadInfo()}
      {(status === "happy") && happyInfo()}
    </p>
    <button className='restart-btn' type="button" onClick={restartGame}>Restart Game</button>
  </div>;
}

export default Banner;
