import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"]
    };
    styles = {
        fontSize: 18,
        fontWeight: "bold",
        fontColor: "blue"
    };

    // learning: This Event handler method does not have access to "this" so cannot increment the this.state.count
    // obj.method() - will return reference to "obj"
    // function(); - this returns the window object, with strict mode enabled it returns undefined
    // The below bind will always work
    /*
    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement(){
        console.log("Increment clicked", this); // here this refers to the counter object now
    }
    */

    //OR OR OR OR

    handleIncrement = ()=>{
        console.log("Increment clicked", this); // here this refers to the counter object now
        //a method in Component superclass setState() need to be called to update the state
        // you have to tell "react" what has changed unlike Angular where it figure out the change and its framework takes care of reflecting the change in DOM
        this.setState({count: this.state.count + 1});

    }

    render() {
        return (
            // The below is "JSX" expression that is compiled by babel to create React.createElement
            //<div> // inserts a div inside the "root" div react element, or you can use the React.Fragment to have everything under the "root" react Div
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.state.count}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>

                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li> )}
                </ul>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "bg m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;