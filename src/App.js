import React, { useState } from 'react';
import './App.css';
import WordDisplay from './components/WordDisplay';
import LetterInput from './components/LetterInput';
import HangmanFigure from './components/HangmanFigure';


function App() {
  const [word, setWord] = useState("REACT");
  const [guessedLetters, setGuesssedLetters] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [gameStatus, setGamesStatus] = useState("playing");

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter) || gameStatus !== "playing") return;

    const newGuessedLetters = [...guessedLetters, letter];
    setGuesssedLetters(newGuessedLetters);

    if (!word.includes(letter)) {
      const newRemainingAttempts = remainingAttempts - 1;
      setRemainingAttempts(newRemainingAttempts);
      if (newRemainingAttempts === 0) {
        setGamesStatus("lost");
      }
    } else {
      const allGuessed = word.split('').every((char) => 
        newGuessedLetters.includes(char)
      );
      if (allGuessed) {
        setGamesStatus("won");
      }
    }
  };

  const restartGame = () => {
    setWord("REACT");
    setGuesssedLetters([]);
    setRemainingAttempts(6);
    setGamesStatus("playing");
  };

  const renderStatusMessage = () => {
    if (gameStatus === "won") return <p className="game-won">You Won!</p>;
    if (gameStatus === "lost") return <p className="game-lost">You Lost! The word was {word}</p>;
    return <p>Keep guessing!</p>;
  };
  

  return (
    <div className="App">

      <h1>Hangman Game</h1>
      
      {/* Hangman Figure with remaining attempts */}
      <HangmanFigure remainingAttempts={remainingAttempts} />

      {/* Word Display */}
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      
      {/* Letter Input */}
      <LetterInput 
        onGuess={handleGuess} 
        disabled={gameStatus !== "playing"} 
      />
      
      {/* Game Status Message */}
      {renderStatusMessage()}

      {/* Restart Button */}
      <button onClick={restartGame}>Restart</button>
    </div>
  );
}

export default App;
