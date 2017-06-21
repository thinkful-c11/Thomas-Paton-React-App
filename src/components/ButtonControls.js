import React from 'react';

export default function ButtonControls(props) {
  const testArray =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (props.stateCards.length === 0) {
    return (
      <button onClick={() => props.newGame(testArray)}>New Game</button>
    );
  } else if (props.gameResult === 'Game Over!') {
    return (
      <button onClick={() => props.newGame(testArray)}>New Game</button>
    );
  }
  else {
    return (
      <div>
        <button onClick={() => props.compareNumbers('higher', props.stateCards[props.gamePosition], props.stateCards[props.gamePosition + 1])}>Higher</button>
        <button onClick={() => props.compareNumbers('lower', props.stateCards[props.gamePosition], props.stateCards[props.gamePosition + 1])}>Lower</button>
      </div>
    );
  }
}
