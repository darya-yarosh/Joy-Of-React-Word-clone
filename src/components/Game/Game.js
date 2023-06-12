import React, { useEffect } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm/GuessForm';
import GuessResults from '../GuessResults/GuessResults';
import Keyboard from '../Keyboard/Keyboard';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import EndGameBanner from '../EndGameBanner';

// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  // Pick a random word on every pageload.
  const [answer, setAnswer] = React.useState(sample(WORDS));

  const [guessList, setGuessList] = React.useState([]);
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState("running");

  useEffect(() => {
    if (guessList[guessList.length - 1] === answer) {
      setGameStatus("won");
    }
    else if (guessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guessList]);

  function addGuess(guess) {
    setGuessList([...guessList, guess]);
  }

  function restartGame() {
    setGuessList([]);
    setGameStatus("running");

    const newAnswer = sample(WORDS);
    setAnswer(newAnswer === answer ? sample(WORDS) : newAnswer);
  }

  return <>
    <GuessResults
      answer={answer}
      guessList={guessList}
    />
    <GuessForm
      submitGuess={addGuess}
      gameStatus={gameStatus}
    />
    <Keyboard
      guessList={guessList}
      answer={answer}
    />
    {gameStatus !== "running" &&
      <EndGameBanner
        status={gameStatus}
        answer={answer}
        guessesCount={guessList.length}
        restartGame={restartGame}
      />
    }
  </>;
}

export default Game;
