import React, { useState } from 'react';
import './Game.css';

const choices = ['rock', 'paper', 'scissors'];

const getRandomChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) return 'It\'s a draw!';
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
};

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (choice) => {
    const computerChoice = getRandomChoice();
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    setResult(determineWinner(choice, computerChoice));
  };

  return (
    <div className="game">
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleClick(choice)}>
            <img src={`${process.env.PUBLIC_URL}/${choice}.png`} alt={choice} />
          </button>
        ))}
      </div>
      <div className="results">
        <p>You chose: {playerChoice && <img src={`${process.env.PUBLIC_URL}/${playerChoice}.png`} alt={playerChoice} />}</p>
        <p>Computer chose: {computerChoice && <img src={`${process.env.PUBLIC_URL}/${computerChoice}.png`} alt={computerChoice} />}</p>
        <p className="result-message">{result}</p>
      </div>
    </div>
  );
};

export default Game;
