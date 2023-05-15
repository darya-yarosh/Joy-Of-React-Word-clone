import React, { useEffect } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm/GuessForm';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner';
import Keyboard from '../Keyboard/Keyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [isGameFinished, setIsGameFinished] = React.useState(false);
  const [bannerStatus, setBannerStatus] = React.useState("sad");

  useEffect(() => {
    if (guessList[guessList.length - 1] === answer) {
      setIsGameFinished(true);
      setBannerStatus("happy");
    }
    else if (guessList.length === 6) {
      setIsGameFinished(true);
      setBannerStatus("sad");
    }
  }, [guessList]);

  function addGuess(guess) {
    setGuessList([...guessList, guess]);
  }

  return <>
    <GuessResults
      answer={answer}
      guessList={guessList}
    />
    <GuessForm
      submitGuess={addGuess}
      isGameFinished={isGameFinished}
    />
    <Keyboard
      guessList={guessList}
      answer={answer}
    />
    {isGameFinished && <Banner
      status={bannerStatus}
      answer={answer}
      guessesCount={guessList.length}
    />}
  </>;
}

export default Game;
