import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm/GuessForm';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

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
    />
  </>;
}

export default Game;
