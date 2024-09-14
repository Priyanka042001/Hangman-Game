import React from 'react';

function WordDisplay ({word, guessedLetters}){

    return(
          <div className='word-display'>
            {word.split('').map((letter, index) =>
            guessedLetters.includes(letter) ? (<span key={index} className='letter'> {letter}</span>)
             :(<span key={index} className='blank'>_</span>)
                    
                
            
        
        )}
          </div>
    )
}

export default WordDisplay;