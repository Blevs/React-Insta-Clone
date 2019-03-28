import React from 'react';
import SearchBar from '../SearchBar';
import PostContainer from './PostContainer.js';
import styled from 'styled-components';
import Fuse from 'fuse.js';
import { postsData } from '../../dummy-data.js';

const Posts = styled.div`
display: flex;
width: 100%;
flex-flow: column;
align-items: center;
padding: 0 5%;
box-sizing: border-box;
background: #fafafa;
min-height: 90vh;
`;

const NoMatches = styled.h2`
width: 100%;
text-align: center;
`;

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.username = props.username;
    this.handleLogout = props.handleLogout;
    this.localStorageKey = "instaPostsPage";
    this.state = {
      posts: [],
      likedMap: {},
      search: "",
      filter: ""
    };
  }
  componentDidMount() {
    // initialize data
    const commonState =
          JSON.parse(window.localStorage.getItem(this.localStorageKey))
          || {
            posts: postsData,
            search: "",
            filter: ""
          };
    const likedMap = JSON.parse(window.localStorage.getItem(this.username + "LikedMap"))
          || {};
    this.setState({
      ...commonState,
      likedMap: likedMap
    });
    // refresh and leave update local storage
    window.addEventListener(
      "beforeunload",
      () => {
        window.localStorage.setItem(this.username + "LikedMap",
                                    JSON.stringify(this.state.likedMap));
        window.localStorage.setItem(this.localStorageKey,
                                    JSON.stringify({...this.state, likedMap: null}));
      }
    );
  }
  componentWillUnmount() {
    window.localStorage.setItem(this.username + "LikedMap",
                                JSON.stringify(this.state.likedMap));
    window.localStorage.setItem(this.localStorageKey,
                                JSON.stringify({...this.state, likedMap: null}));
  }
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.setState(prevState => ({
      filter: prevState.search.trim()
    }));
  };
  addComment = (event, postidx) => {
    event.preventDefault();
    const value = event.target.comment.value;
    if (!value.match(/^\s*$/)) {
      event.target.comment.value = "";
      this.setState(({posts}) => {
        posts[postidx].comments.push({
          id: Date.now().toString(),
          username: this.username,
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
    this.setState(({posts, likedMap}) => {
      posts[postidx].likes += likedMap[postidx] ? -1 : 1;
      likedMap[postidx] = !likedMap[postidx];
      return {
        posts: posts,
        likedMap: likedMap
      };
    });
  }
  render() {
    // const filteredPosts = this.state.posts
    //       .filter(post => post.username.toLowerCase().includes(this.state.filter.toLowerCase()));
    const filteredPosts = (this.state.filter === ''
                           ? this.state.posts
                           : (new Fuse(this.state.posts, {keys: ['username']}))
                           .search(this.state.filter));
    return (
      <div className="App">
        <SearchBar search={this.state.search}
                   handleInput={this.handleInput}
                   handleSearch={this.handleSearchSubmit}
                   handleLogout={this.handleLogout} />
        <Posts>
          {filteredPosts.length === 0
           ? <NoMatches>Nothing matches your search:<br />'{this.state.filter}'</NoMatches>
           : filteredPosts.map((post, idx) => (
             <PostContainer {...post}
                            key={post.id}
                            postidx={idx}
                            liked={this.state.likedMap[idx]}
                            addComment={this.addComment}
                            handleLike={this.handleLike}
                            currentUser={this.username}
                            deleteComment={this.deleteComment} />))}
        </Posts>
      </div>
    );
  }
}

export default PostsPage;
