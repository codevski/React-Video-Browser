import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        // Calling the parent method super from Component
        super(props);

        // The only place where we would change state value in a = style
        // Alt we use setState in the component
        this.state = { term: ''};
    }

    render() {
        return (
            // Controlled input. Controlled by change of state
            <div>
                <input 
                value={this.state.term}
                onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}

export default SearchBar;