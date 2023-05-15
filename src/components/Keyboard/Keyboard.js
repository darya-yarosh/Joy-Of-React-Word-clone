import React from "react";
import { getValidGuess } from "../../game-helpers";

function Keyboard({
  guessList,
  answer,
}) {
  const KEYBOARD_BUTTONS = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M'
  ]

  function getKeyboardButtonClassName(keyboardButton, guessList, answer) {
    let keyboardButtonClassName = `cell unused keyboard-button`;
    guessList.forEach(guess => {
      const validGuess = getValidGuess(guess, answer);
      const foundLetter = validGuess.find(guessLetter => guessLetter.letter === keyboardButton);
      if (foundLetter !== undefined && foundLetter.letter === keyboardButton) {
        keyboardButtonClassName = `cell ${foundLetter.status} keyboard-button `;
      }
    })
    return keyboardButtonClassName;
  }

  return <div className="keyboard">
    {KEYBOARD_BUTTONS.map((button) => {
      const className = getKeyboardButtonClassName(button, guessList, answer);
      return (
        <button className={className}
          key={button}
          type="button"
          value={button}
        >
          {button}
        </button>
      )
    })}
  </div>;
}

export default Keyboard;
