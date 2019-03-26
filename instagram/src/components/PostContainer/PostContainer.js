import React from 'react';
import CommentSection from '../CommentSection';
import PostHeader from './PostHeader.js';
import Post from './Post.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostDiv = styled.div`
box-sizing: border-box;
max-width: 600px;
width: 100%;
background: white;
border: 1px solid lightgrey;
display: flex;
flex-flow: column;
box-shadow: 0 0 3px lightgrey;
margin: 50px 0;
`;

const PostContainer = ({
  username, thumbnailUrl, imageUrl, likes, liked,
  timestamp, comments, postidx, addComment, handleLike,
  currentUser, deleteComment
}) => {
  return (
    <PostDiv>
      <PostHeader username={username}
                  thumbnailUrl={thumbnailUrl}/>
      <Post imageUrl={imageUrl}
            postidx={postidx}
            liked={liked}
            handleLike={handleLike}/>
      <CommentSection comments={comments}
                      likes={likes}
                      liked={liked}
                      timestamp={timestamp}
                      postidx={postidx}
                      addComment={addComment}
                      handleLike={handleLike}
                      currentUser={currentUser}
                      deleteComment={deleteComment} />
    </PostDiv>
  );
};

PostContainer.propTypes = {
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  liked: PropTypes.bool,
  timestamp: PropTypes.string.isRequired,
  currentUser: PropTypes.string,
  deleteComment: PropTypes.func.isRequired,
  postidx: PropTypes.number.isRequired,
  addComment: PropTypes.func.isRequired,
  handleLike: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }))
};

export default PostContainer;
