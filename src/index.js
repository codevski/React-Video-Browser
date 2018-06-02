import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDC3sdNEnklFAWzEZY7jepiWzCfCGpCQLM';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'funhaus'}, (videos) => {
      console.log(videos);
      // This only works when the key and the value are the same. It is the same as:
      // this.setState({ videos: videos })
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />  
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
