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
  render() {
    return (
      <div className="App">
            <SearchBar />
        <Posts>
          {dummyData.map(post => (
              <PostContainer {...post} key={post.id} />
          ))}
        </Posts>
      </div>
    );
  }
}

export default App;
