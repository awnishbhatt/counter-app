import React, {Component} from 'react';
import Counter from "./counter";

// SINGLE SOURCE OF TRUTH - the "Counters" class maintaining the state centrally
// Moved handleIncrement, added handleReset and change this class to control and maintain state in this class only. While the events (onClick) is defined in the "Counter" class,
// its eventhandler "handleIncrement etc.." are defined and the counter state modified in this class.
class Counters extends Component {
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
        this.setState({counters : newCounters});
    };

    handleDelete = (counterId) => {
        console.log("handle delete called", counterId);
        //note: you done delete the element from the state, but instead assign a new state variable for reach to then refresh

        const localCounter = this.state.counters.filter(cntr => cntr.id !== counterId);
        this.setState({counters: localCounter});
    };

    handleReset = () => {
        const newCounters = this.state.counters.map(theCounter => {
            theCounter.value =0;
            return theCounter;
        })
        this.setState({counters: newCounters});
    };

    //note: key is a special attr that identifies the component and other properties of the component are  seen in "this.props"
    render() {
        return (
            <div>
                <button className="btn btn-sm m-2 btn-primary" onClick={this.handleReset}>Reset</button>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onMyDelete={this.handleDelete}
                        onMyIncrement={this.handleIncrement}
                    />)
                }
            </div>
        );
    }
}

export default Counters;