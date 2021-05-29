import React, {Component} from 'react';
import Counter from "./counter";

// SINGLE SOURCE OF TRUTH - the "Counters" class maintaining the state centrally
// Moved handleIncrement, added handleReset and change this class to control and maintain state in this class only. While the events (onClick) is defined in the "Counter" class,
// its eventhandler "handleIncrement etc.." are defined and the counter state modified in this class.
class Counters extends Component {

     //note: key is a special attr that identifies the component and other properties of the component are  seen in "this.props"
    render() {
        return (
            <div>
                <button className="btn btn-sm m-2 btn-primary"
                        onClick={this.props.onReset}>Reset</button>
                {
                    this.props.parentCounters.map(counter =>
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onMyDelete={this.props.onDelete}
                        onMyIncrement={this.props.onIncrement}
                    />)
                }
            </div>
        );
    }
}

export default Counters;