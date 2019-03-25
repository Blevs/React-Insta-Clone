import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import dummyData from './dummy-data.js';
import styled from 'styled-components';

const Posts = styled.div`
display: flex;
width: 100%;
flex-flow: column;
align-items: center;
padding: 0 5%;
box-sizing: border-box;
background: #fafafa;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Posts>
          {this.state.posts.map(post => (
            <PostContainer {...post} key={post.id} />
          ))}
        </Posts>
      </div>
    );
  }
}

export default App;
