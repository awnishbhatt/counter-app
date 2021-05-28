import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"]
    };

    //conditionally render tags

    renderTags(){
        if (this.state.tags.length === 0 ) {return <p>There are no tags here!!</p>;}

        return this.state.tags.map(tag => <li key={tag}>{tag}</li> );
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.tags.length ===0 && "no tags, add please!!"}
                    {this.renderTags()}
                </ul>
            </div>
        );
    }
}

export default Counter;