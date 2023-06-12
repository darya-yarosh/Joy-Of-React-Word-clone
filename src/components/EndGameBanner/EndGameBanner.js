import React from "react";
import Banner from "../Banner/Banner";
function EndGameBanner({
  status,
  answer,
  guessesCount,
  restartGame
}) {

  function wonInfo() {
    const guessInfo = guessesCount === 1
      ? "1 guess"
      : `${guessesCount} guesses`

    return <>
      <strong>Congratulations!</strong> Got it in <strong>{guessInfo}</strong>.
    </>
  }

  function lostInfo() {
    return <>
      Sorry, the correct answer is <strong>{answer}</strong>
    </>
  }

  const bannerStyle = status === "won" ? "happy" : "sad"
  return (
    <Banner
      status={bannerStyle}>
      <p>
        {(status === "lost") && lostInfo()}
        {(status === "won") && wonInfo()}
      </p>
      <button className='restart-btn' type="button" onClick={restartGame}>Restart Game</button>
    </Banner>
  )
}

export default EndGameBanner;
