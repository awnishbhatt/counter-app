import React, {Component} from 'react';

// REMOVED LOCAL STATE AND REFERENCES TO IT, and REPLACED IT WITH THE this.props.<property> from the controlling <code>Counters</code> object
class Counter extends Component {

    styles = {
        fontSize: 18,
        fontWeight: "bold",
        fontColor: "blue"
    };

    render() {
        console.log("props", this.props);

        return (
            // The below is "JSX" expression that is compiled by babel to create React.createElement
            //<div> // inserts a div inside the "root" div react element, or you can use the React.Fragment to have everything under the "root" react Div
            // note than this.handleIncrement is the reference to the method handleIncrement()-
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onMyIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment
                </button>

                <button onClick={() => this.props.onMyDelete(this.props.counter.id)} className="btn btn-sm btn-danger m-2">Delete</button>
            </div>
        );
    }

    formatCount() {
        const {value} = this.props.counter;
        return value ===0 ? "Zero" : value;
    }

    getBadgeClasses() {
        let classes = "bg m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;