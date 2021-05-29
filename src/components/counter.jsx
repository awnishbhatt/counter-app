import React, {Component} from 'react';

// state is local to class, props is read only to
class Counter extends Component {
    state = {
        value: this.props.counter.value,
    };
    styles = {
        fontSize: 18,
        fontWeight: "bold",
        fontColor: "blue"
    };

    handleIncrement = product =>{
        //a method in Component superclass setState() need to be called to update the state
        // you have to tell "react" what has changed unlike Angular where it figure out the change and its framework takes care of reflecting the change in DOM
        console.log(product);
        this.setState({value: this.state.value + 1});
    }

    render() {
        console.log("props", this.props);

        return (
            // The below is "JSX" expression that is compiled by babel to create React.createElement
            //<div> // inserts a div inside the "root" div react element, or you can use the React.Fragment to have everything under the "root" react Div
            // note than this.handleIncrement is the reference to the method handleIncrement()-
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement("product")} className="btn btn-secondary btn-sm">Increment
                </button>

                <button onClick={() => this.props.onMyDelete(this.props.counter.id)} className="btn btn-sm btn-danger m-2">Delete</button>
            </div>
        );
    }

    formatCount() {
        const {value} = this.state;
        return value ===0 ? "Zero" : value;
    }

    getBadgeClasses() {
        let classes = "bg m-2 bg-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;