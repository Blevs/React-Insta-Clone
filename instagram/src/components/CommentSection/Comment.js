import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentDiv = styled.div`
margin: 5px 0;
position: relative;
.delete {
  position: absolute;
  right: -10px;
  top: -10px;
  opacity: 0;
  transition: opacity 0.2s;
  font-size: 1.8rem;
  color: red;
  cursor: pointer;
}
&:hover .delete {
  opacity: 1;
}
`;

const Username = styled.span`
font-weight: bold;
margin-right: 5px;
`;

const Comment = ({username, text, currentUser, postidx, commentidx, deleteComment}) => {
  return (
    <CommentDiv>
      <Username>{username}</Username>
      {text}
      {username === currentUser
       && <div className="delete" onClick={() => deleteComment(postidx, commentidx)}>&times;</div>}
    </CommentDiv>
  );
};

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  postidx: PropTypes.number.isRequired,
  commentidx: PropTypes.number.isRequired,
  deleteComment: PropTypes.func.isRequired,
  currentUser: PropTypes.string
};

export default Comment;
