import React from 'react';

export default function ButtonControls(props) {
  const testArray =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (props.gameResult === 'You Won!' || props.stateCards.length === 0 || props.gameResult === 'Game Over!') {
    return (
      <button onClick={() => props.newGame()}>New Game</button>
    );
  }
  else {
    return (
      <div>
        <button onClick={() => props.compareNumbers('higher', props.stateCards[props.gamePosition].value, props.stateCards[props.gamePosition + 1].value)}>Higher</button>
        <button onClick={() => props.compareNumbers('lower', props.stateCards[props.gamePosition].value, props.stateCards[props.gamePosition + 1].value)}>Lower</button>
      </div>
    );
  }
}
