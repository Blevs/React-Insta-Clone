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
  transition-delay: 0.3s;
}
&:hover .delete {
  opacity: 1;
  transition-delay: 0s;
}
`;

const Username = styled.span`
font-weight: bold;
margin-right: 5px;
`;

const Comment = ({username, text, currentUser, postid, commentid, deleteComment}) => {
  return (
    <CommentDiv>
      <Username>{username}</Username>
      {text}
      {username === currentUser
       && <div className="delete" onClick={() => deleteComment(commentid)}>&times;</div>}
    </CommentDiv>
  );
};

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  postid: PropTypes.string.isRequired,
  commentid: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
  currentUser: PropTypes.string
};

export default Comment;
