import React from 'react';
import Output from './Output';
import ButtonControls from './ButtonControls';
import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsArray: [],
      guesses: []
    };
  }

  compareNumbers(guess, currentIndex, nextIndex) {
    function greaterThan() {
      return nextIndex > currentIndex;
    }
    function lessThan() {
      return nextIndex < currentIndex;
    }

    if ((guess === 'higher') ? greaterThan() : lessThan()) {
      this.setState({ guesses: [...this.state.guesses, true] });
    } else {
      this.setState({ guesses: [...this.state.guesses, false] });
    }
  }

  newGame() {
    const cardsId = this.props.cards.map(card => {
      return card.id;
    });
    for(let i = cardsId.length; i; i--){
      let j = Math.floor(Math.random() * i);
      [cardsId[i-1], cardsId[j]] = [cardsId[j], cardsId[i-1]];
    }
    this.setState({
      cardsArray: cardsId,
      guesses: []
    });
  }

  render() {
    const stateGuess = this.state.guesses;
    const gameResult = function() {
      if (stateGuess.length === 0) {
        return '';
      } else if (stateGuess[stateGuess.length-1] === false) {
        return 'Game Over!';
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
        <Output value={this.state.cardsArray.slice(0, gamePosition+1)} />
        <ButtonControls
          stateCards={this.state.cardsArray}
          newGame={() => this.newGame()}
          compareNumbers={(guess, currentIndex, nextIndex) => this.compareNumbers(guess, currentIndex, nextIndex)}
          gamePosition={gamePosition}
          gameResult={gameResult()}
        />
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
