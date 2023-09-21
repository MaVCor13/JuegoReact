import React, { useState } from 'react';

function PlayerInput({ onStartGame }) {
  const [playerName, setPlayerName] = useState('');

  const handleStartClick = () => {
    onStartGame(playerName);
  };

  return (
    <div id="player-section">
      <label htmlFor="player-name">Ingresa tu nombre:</label>
      <input
        type="text"
        id="player-name"
        required
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button id="start-button" onClick={handleStartClick}>
        Comenzar juego
      </button>
    </div>
  );
}

export default PlayerInput;
