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
    this.localStorageKey = "instaclone";
    this.state = {};
  }
  componentDidMount() {
    // initialize data
    this.setState(
      JSON.parse(window.localStorage.getItem(this.localStorageKey))
      || {
        posts: dummyData,
        username: "blevs",
      }
    );
    // refresh and leave update local storage
    window.addEventListener(
      "beforeunload",
      () => window.localStorage.setItem(this.localStorageKey, JSON.stringify(this.state))
    );
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
  deleteComment = (postidx, commentidx) => {
    this.setState(({posts}) => {
      posts[postidx].comments.splice(commentidx, 1);
      return {posts: posts};
    });
  }
  handleLike = (postidx) => {
    this.setState(({posts}) => {
      posts[postidx].likes += posts[postidx].liked ? -1 : 1;
      posts[postidx].liked = !posts[postidx].liked;
      return {
        posts: posts
      };
    });
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Posts>
          {this.state.posts && this.state.posts.map((post, idx) => (
            <PostContainer {...post}
                           postidx={idx}
                           key={post.id}
                           addComment={this.addComment}
                           handleLike={this.handleLike}
                           currentUser={this.state.username}
                           deleteComment={this.deleteComment} />
          ))}
        </Posts>
      </div>
    );
  }
}

export default App;
