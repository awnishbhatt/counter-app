import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Counters from "./components/counters";

import React, {Component} from 'react';

//Modified the App to be the contaier for the Navbar + the Counters
class App extends Component {

    state = {
        counters: [
            {id: 1, value: 44},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    }

    handleIncrement = counter => {
        console.log("handle increment called", counter);

        const newCounters = [...this.state.counters]; // cloning the counters
        const indexOfCounter = newCounters.indexOf(counter);
        newCounters[indexOfCounter] = {...counter};
        newCounters[indexOfCounter].value++;
        this.setState({counters: newCounters});
    };

    handleDelete = (counterId) => {
        console.log("handle delete called", counterId);
        //note: you done delete the element from the state, but instead assign a new state variable for reach to then refresh

        const localCounter = this.state.counters.filter(cntr => cntr.id !== counterId);
        this.setState({counters: localCounter});
    };

    handleReset = () => {
        const newCounters = this.state.counters.map(theCounter => {
            theCounter.value = 0;
            return theCounter;
        })
        this.setState({counters: newCounters});
    };

    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <main className="container">
                    <Counters
                        parentCounters={this.state.counters}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}>
                    </Counters>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
