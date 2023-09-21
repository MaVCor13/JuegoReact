import React, { useState, useEffect } from 'react';
import '../App.css';
import PlayerInput from './PlayerInput';
import Score from './Score';
import ChoiceButton from './ChoiceButton';

function Game() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [round, setRound] = useState(1);

  const choices = ['rock', 'paper', 'scissors'];

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      return 'Empate';
    } else if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) {
      return 'Ganaste';
    } else {
      return 'Perdiste';
    }
  };

  const handleStartGame = (playerName) => {
    // Inicializar el juego aquí si es necesario
  };

  const handleUserChoice = (choice) => {
    const computerChoice = getRandomChoice();
    const winner = determineWinner(choice, computerChoice);

    setComputerChoice(computerChoice);
    setUserChoice(choice);

    if (winner === 'Ganaste') {
      setPlayerScore(playerScore + 1);
    } else if (winner === 'Perdiste') {
      setComputerScore(computerScore + 1);
    }

    setResult(winner);

    setRound(round + 1);
  };

  useEffect(() => {
    if (round === 5) {
      if (playerScore > computerScore) {
        setResult('¡Ganaste el juego!');
      } else if (computerScore > playerScore) {
        setResult('La computadora ganó el juego.');
      } else {
        setResult('El juego terminó en empate.');
      }

      setPlayerScore(0);
      setComputerScore(0);
      setRound(1);
    }
  }, [round, playerScore, computerScore]);

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

