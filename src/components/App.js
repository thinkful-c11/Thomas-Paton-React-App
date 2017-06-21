import React from 'react';
import Output from './Output';
import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [1, 2, 4, 10, 5, 8, 11, 9],
      guesses: []
    };
  }

  compareNumbers(guess, currentNum, nextNum) {
    function greaterThan() {
      return nextNum > currentNum;
    }
    function lessThan() {
      return nextNum < currentNum;
    }

    if ((guess === 'higher') ? greaterThan() : lessThan()) {
      this.setState({ guesses: [...this.state.guesses, true] });
    } else {
      this.setState({ guesses: [...this.state.guesses, false] });
    }
  }



  render() {
    const stateGuess = this.state.guesses;
    const gameResult = function() {
      if (stateGuess.length === 0) {
        return '';
      } else if (stateGuess[stateGuess.length-1] === false) {
          return 'Game Over!'
      }
      else if (stateGuess[stateGuess.length - 1] === true && stateGuess.length >= 6) {
        return 'You Won!';
      } else {
        return 'Correct!';
      }
    };
    const gamePosition = stateGuess.length;
    return (
      <div className='app'>
        {/* <button onClick={() => console.log('clicked')}>Start Game!</button> */}
        <Output value={this.state.numbers.slice(0, gamePosition+1)} />
        <button onClick={() => this.compareNumbers('higher', this.state.numbers[gamePosition], this.state.numbers[gamePosition + 1])}>Higher</button>
        <button onClick={() => this.compareNumbers('lower', this.state.numbers[gamePosition], this.state.numbers[gamePosition + 1])}>Lower</button>
        <Output value={[gameResult()]} />
      </div>
    );
  }
}




    // generateComputerNumber() {
    //     const newNumber = Math.floor((Math.random() * 100) + 1);
    //     this.setState({
    //         computerNumber: newNumber
    //     })
    // }
    //
    // generatePlayerNumber(upper, lower) {
    //     const newNumber = Math.floor((Math.random() * upper) + lower);
    //     this.setState({
    //         playerNumber: newNumber
    //     })
    // }
