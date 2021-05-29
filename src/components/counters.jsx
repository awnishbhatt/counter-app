import React, {Component} from 'react';
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 44},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    }

    handleDelete = (counterId) => {
        console.log("handle delete called", counterId);
        //note: you done delete the element from the state, but instead assign a new state variable for reach to then refresh

        const localCounter = this.state.counters.filter(cntr => cntr.id !== counterId);
        this.setState({counters : localCounter});
    }

    //note: key is a special attr that identifies the component and other properties of the component are  seen in "this.props"
    render() {
        return (
            <div>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        counter = {counter}
                        onMyDelete={this.handleDelete}/>)}
            </div>
        );
    }
}

export default Counters;