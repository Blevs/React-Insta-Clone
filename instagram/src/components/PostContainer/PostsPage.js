import React from 'react';
import SearchBar from '../SearchBar';
import PostContainer from './PostContainer.js';
import styled from 'styled-components';
import Fuse from 'fuse.js';
import { getPostsWithLiked } from '../../clientapi';

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
      search: "",
      filter: ""
    };
  }
  componentDidMount() {
    // initialize data
    const commonState =
          JSON.parse(window.localStorage.getItem(this.localStorageKey))
          || {
            search: "",
            filter: ""
          };
    const likedMap = JSON.parse(window.localStorage.getItem(this.username + "LikedMap"))
          || {};
    const posts = getPostsWithLiked(this.username);
    this.setState({
      posts: posts,
      likedMap: likedMap
    });
    // refresh and leave update local storage
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
  render() {
    // const filteredPosts = this.state.posts
    //       .filter(post => post.username.toLowerCase().includes(this.state.filter.toLowerCase()));
    const filteredPosts = (this.state.filter === ''
                           ? this.state.posts
                           : (new Fuse(this.state.posts, {keys: ['username']}))
                           .search(this.state.filter));
    return (
      <div>
        <SearchBar search={this.state.search}
                   handleInput={this.handleInput}
                   handleSearch={this.handleSearchSubmit}
                   handleLogout={this.handleLogout} />
        <Posts>
          {filteredPosts.length === 0
           ? <NoMatches>Nothing matches your search:<br />'{this.state.filter}'</NoMatches>
           : filteredPosts.map((post, idx) => (
             <PostContainer post={post}
                            key={post.id}
                            postidx={idx}
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
