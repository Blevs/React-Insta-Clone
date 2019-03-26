import React from 'react';
import Comment from './Comment.js';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import * as moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

const CommentDiv = styled.div`
padding: 15px 20px 0 20px;
box-sizing: border-box;
`;

const Likes = styled.div`
font-weight: bold;
`;

const CommentInput = styled.input`
width: 100%;
box-sizing: border-box;
border: none;
border-top: 1px solid lightgrey;
margin-top: 5px;
margin-bottom: 0;
padding: 20px 0;
font-size: 1.0rem;
font-weight: bold;
`;

const Time = styled.div`
color: grey;
text-transform: uppercase;
font-size: 0.7rem;
margin: 5px 0
`;

const likeKeyframe = keyframes`
0% {
  transform: scale(1.0);
}
60% {
  transform: scale(1.3);
}
100% {
  transform: scale(1.0);
}
`;

const IconsDiv = styled.div`
margin-bottom: 10px;
svg {
  cursor: pointer;
  path {
    transition: fill 0.3s;
  }
  &:hover path {
    fill: #4A4A4A;
  }
}
svg:first-child {
  margin-right: 20px;
}
svg.liked {
  animation: ${likeKeyframe} 0.25s ease-out;
  path, &:hover path {
    fill: red;
  }
}
`;

const CommentSection = (
  {comments, likes, liked, timestamp, postidx, addComment, handleLike, currentUser, deleteComment}
) => {
  let commentInput = null;
  return (
    <CommentDiv>
      <IconsDiv>
        <FontAwesomeIcon icon={liked ? faHeartSolid : faHeart}
                         className={liked ? "liked" : ""}
                         size="2x"
                         onClick={() => handleLike(postidx)} />
        <FontAwesomeIcon icon={faComment}
                         size="2x"
                         onClick={() => commentInput && commentInput.focus()} />
      </IconsDiv>
      <Likes>
        {likes} likes
      </Likes>
      {comments.map((comment, commentidx) => (
        <Comment {...comment}
                 key={comment.id}
                 postidx={postidx}
                 commentidx={commentidx}
                 deleteComment={deleteComment}
                 currentUser={currentUser} />
      ))}
      <Time>
        {moment(timestamp, 'MMMM Do YYYY, HH:mm:ss a').fromNow()}
      </Time>
      <form onSubmit={event => addComment(event, postidx)}>
        <CommentInput type="text"
                      name="comment"
                      ref={input => commentInput = input}
                      placeholder="Add a comment..." />
      </form>
    </CommentDiv>
  );
};

CommentSection.propTypes = {
  likes: PropTypes.number.isRequired,
  liked: PropTypes.bool,
  timestamp: PropTypes.string.isRequired,
  postidx: PropTypes.number.isRequired,
  currentUser: PropTypes.string,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  handleLike: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }))
};

export default CommentSection;
