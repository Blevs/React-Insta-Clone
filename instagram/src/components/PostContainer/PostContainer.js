import React, { useState } from 'react';
import CommentSection from '../CommentSection';
import PostHeader from './PostHeader.js';
import Post from './Post.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { toggleLikePost, addComment as addCommentServer, deleteComment as deleteCommentServer } from '../../clientapi';
import { Redirect } from 'react-router-dom';

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

const PostContainer = ({post, currentUser, history}) => {
  const {username, thumbnailUrl, imageUrl, likes: likesInit, liked: likedInit, timestamp, comments: commentsInit, id: postid} = post;
  const [likes, setLikes] = useState(likesInit);
  const [liked, setLiked] = useState(likedInit);
  const [redirect, setRedirect] = useState(false);
  const handleLike = () => {
    if (currentUser === "" || !currentUser) {
      setRedirect(true);
    } else {
      setLikes(likes + (liked ? -1 : 1));
      setLiked(!liked);
      toggleLikePost(postid, currentUser);
    }
  };
  const [comments, setComments] = useState(commentsInit);
  const addComment = (event) => {
    event.preventDefault();
    if (currentUser === "" || !currentUser) {
      setRedirect(true);
    } else {
      const text = event.target.comment.value;
      if (!text.match(/^\s*$/)) {
        event.target.comment.value = "";
        const commentid = addCommentServer(postid, currentUser, text);
        setComments(comments.concat({id: commentid, username: currentUser, text: text}));
      }
    }
  };
  const deleteComment = (commentid) => {
    const commentidx = comments.findIndex(({id}) => id === commentid);
    if (commentidx >= 0) {
      const newComments = [...comments];
      newComments.splice(commentidx, 1);
      setComments(newComments);
      deleteCommentServer(postid, commentid);
    }
  };
  return (
    <PostDiv>
      {redirect && <Redirect to="/" />}
      <PostHeader username={username}
                  thumbnailUrl={thumbnailUrl}/>
      <Post imageUrl={imageUrl}
            postid={postid}
            liked={liked}
            handleLike={handleLike}/>
      <CommentSection comments={comments}
                      likes={likes}
                      liked={liked}
                      timestamp={timestamp}
                      postid={postid}
                      addComment={addComment}
                      handleLike={handleLike}
                      currentUser={currentUser}
                      deleteComment={deleteComment} />
    </PostDiv>
  );
};

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }))
  }).isRequired,
  currentUser: PropTypes.string,
};

export default PostContainer;
