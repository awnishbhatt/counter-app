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

    render() {
        return (
            // The below is "JSX" expression that is compiled by babel to create React.createElement
            //<div> // inserts a div inside the "root" div react element, or you can use the React.Fragment to have everything under the "root" react Div
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.state.count}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>

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