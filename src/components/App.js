import React from 'react';
import NumberOutput from './number-output'

export default class App extends React.Component {
    constuctor(props){
        super(props);
        this.state = {
            computerNumber: 0,
            playerNumber: 0,
            upper: 100,
            lower: 1,
        }
    }

    generateComputerNumber() {
        const newNumber = Math.floor((Math.random() * 100) + 1);
        this.setState({
            computerNumber: newNumber
        })
    }

    generatePlayerNumber(upper, lower) {
        const newNumber = Math.floor((Math.random() * upper) + lower);
        this.setState({
            playerNumber: newNumber
        })
    }


    render () {
        return(
            <div>
                <button onClick={() => {this.generateComputerNumber(); this.generatePlayerNumber(this.state.upper, this.state.lower);} }>Start New Game</button>
                <NumberOutput />
            </div>
        )
    }
}