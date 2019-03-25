import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import dummyData from './dummy-data.js';

class App extends Component {
  render() {
    return (
      <div className="App">
            <SearchBar />
        {dummyData.map(post => (
            <PostContainer {...post} key={post.id} />
        ))}
      </div>
    );
  }
}

export default App;
