import React from 'react';

function ChoiceButton({ id, choice, onClick }) {
  return (
    <button id={id} type="button" onClick={() => onClick(choice)}>
      <img src={`img/${choice}.svg`} alt={choice} />
    </button>
  );
}

export default ChoiceButton;
