import React from 'react';
import Output from './Output';
import ButtonControls from './ButtonControls';
import CardDisplay from './CardDisplay';
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

  //immutability problem
  newGame() {
    const cards = this.props.cards.slice();
    for(let i = cards.length; i; i--){
      let j = Math.floor(Math.random() * i);
      [cards[i-1], cards[j]] = [cards[j], cards[i-1]];
    }
    this.setState({
      cardsArray: cards,
      guesses: []
    });
  }

  render() {
    const stateGuess = this.state.guesses;
    const gamePosition = stateGuess.length;
    const cardNames = this.state.cardsArray.map(card => {
      return card.name;
    });
    const cardImgs = this.state.cardsArray.map(card => {
      return card.svg;
    });
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

    return (
      <div className='app'>
        <Output value={cardNames.slice(0, gamePosition+1)} />
        <CardDisplay cardImgs={cardImgs.slice(0, gamePosition+1)} />
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
