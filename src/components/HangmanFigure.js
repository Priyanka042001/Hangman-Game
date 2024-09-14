import React from 'react';

function HangmanFigure({ remainingAttempts }) {
    const maxAttempts = 6;
    const incorrectGuesses = maxAttempts - remainingAttempts;

    return (
        <div className="hangman-figure">
            {/* Display remaining attempts */}
            <p>{`Attempts Left: ${remainingAttempts}`}</p>

            {/* SVG Drawing of the Hangman */}
            <svg height="250" width="200" className="hangman-drawing">
                {/* Gallows */}
                <line x1="10" y1="230" x2="150" y2="230" stroke="black" strokeWidth="5" />
                <line x1="80" y1="20" x2="80" y2="230" stroke="black" strokeWidth="5" />
                <line x1="80" y1="20" x2="140" y2="20" stroke="black" strokeWidth="5" />
                <line x1="140" y1="20" x2="140" y2="50" stroke="black" strokeWidth="5" />

                {/* Hangman Parts (Progressively Drawn Based on Incorrect Guesses) */}
                
                {/* Head */}
                {incorrectGuesses > 0 && <circle cx="140" cy="70" r="20" stroke="black" strokeWidth="4" fill="none" />}
                
                {/* Body */}
                {incorrectGuesses > 1 && <line x1="140" y1="90" x2="140" y2="150" stroke="black" strokeWidth="4" />}
                
                {/* Left Arm */}
                {incorrectGuesses > 2 && <line x1="140" y1="110" x2="120" y2="130" stroke="black" strokeWidth="4" />}
                
                {/* Right Arm */}
                {incorrectGuesses > 3 && <line x1="140" y1="110" x2="160" y2="130" stroke="black" strokeWidth="4" />}
                
                {/* Left Leg */}
                {incorrectGuesses > 4 && <line x1="140" y1="150" x2="120" y2="180" stroke="black" strokeWidth="4" />}
                
                {/* Right Leg */}
                {incorrectGuesses > 5 && <line x1="140" y1="150" x2="160" y2="180" stroke="black" strokeWidth="4" />}
            </svg>
        </div>
    );
}

export default HangmanFigure;
