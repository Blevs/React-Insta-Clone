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
      posts: dummyData,
      username: "blevs"
    };
  }
  addComment = (event, postidx) => {
    event.preventDefault();
    const value = event.target.comment.value;
    if (!value.match(/^\s*$/)) {
      event.target.comment.value = "";
      this.setState(({username, posts}) => {
        posts[postidx].comments.push({
          id: Date.now().toString(),
          username: username,
          text: value
        });
        return {posts: posts};
      });
    }
  };
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Posts>
          {this.state.posts.map((post, idx) => (
            <PostContainer {...post} postidx={idx} key={post.id} addComment={this.addComment}/>
          ))}
        </Posts>
      </div>
    );
  }
}

export default App;
