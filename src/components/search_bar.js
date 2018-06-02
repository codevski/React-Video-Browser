import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        // Calling the parent method super from Component
        super(props);

        // The only place where we would change state value in a = style
        // Alt we use setState in the component
        this.state = { term: ''};
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            // Controlled input. Controlled by change of state
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;