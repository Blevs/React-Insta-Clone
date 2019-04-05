import React from 'react';
import SearchBar from '../SearchBar';
import PostContainer from './PostContainer.js';
import styled from 'styled-components';
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

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.username = props.username;
    this.handleLogout = props.handleLogout;
    this.state = {posts: [],};
  }
  componentDidMount() {
    // initialize data
    const posts = getPostsWithLiked(this.username);
    this.setState({posts: posts});
  }
  render() {
    return (
      <div>
        <SearchBar search={this.state.search}
                   handleInput={this.handleInput}
                   handleSearch={this.handleSearchSubmit}
                   handleLogout={this.handleLogout} />
        <Posts>
          {
            this.state.posts.map((post, idx) => (
              <PostContainer post={post}
                             key={post.id}
                             postidx={idx}
                             addComment={this.addComment}
                             handleLike={this.handleLike}
                             currentUser={this.username}
                             deleteComment={this.deleteComment} />))
          }
        </Posts>
      </div>
    );
  }
}

export default PostsPage;
