import React, { useState } from 'react';

function LetterInput({ onGuess, disabled}) {
    
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) =>{

        e.preventDefault();
        if (inputValue && /^[a-zA-Z]$/.test(inputValue)){
            onGuess(inputValue.toUpperCase());
            setInputValue('');
    }
};

    return(
        <form onSubmit = {handleSubmit} className = "letter-input">
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} maxLength="1" disabled={disabled}/>
        <button type="submit" disabled={disabled}>Guess</button>
        </form>

    );

    }

export default LetterInput;