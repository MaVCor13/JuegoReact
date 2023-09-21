import React, { useState } from 'react';
import '../App.css'; // 
import PlayerInput from './PlayerInput';
import Score from './Score';
import ChoiceButton from './ChoiceButton';

function Game() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const handleStartGame = (playerName) => {
    // 
  };

  const handleUserChoice = (choice) => {
    
  };

  return (
    <div className="container">
      <h1>Piedra Papel Tijeras</h1>
      <Score playerScore={playerScore} computerScore={computerScore} />
      <div id="result">
        <img id="machine-img" src={`img/${computerChoice}.svg`} alt={computerChoice} />
        <div id="start-text">{result || 'Elige una opción'}</div>
        <img id="user-img" src={`img/${userChoice}.svg`} alt={userChoice} />
      </div>
      <PlayerInput onStartGame={handleStartGame} />
      <div id="group-btn">
        <ChoiceButton id="rock" choice="rock" onClick={handleUserChoice} />
        <ChoiceButton id="paper" choice="paper" onClick={handleUserChoice} />
        <ChoiceButton id="scissors" choice="scissors" onClick={handleUserChoice} />
      </div>
    </div>
  );
}

export default Game;

