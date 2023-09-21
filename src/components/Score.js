import React from 'react';

function Score({ playerScore, computerScore }) {
  return (
    <div>
      <div id="player-score">Tu Puntaje: {playerScore}</div>
      <div id="computer-score">Puntaje PC: {computerScore}</div>
    </div>
  );
}

export default Score;
