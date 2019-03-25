import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentDiv = styled.div`
margin: 5px 0;
`;

const Username = styled.span`
font-weight: bold;
margin-right: 5px;
`;

const Comment = ({username, text}) => {
    return (
        <CommentDiv>
          <Username>{username}</Username>
          {text}
        </CommentDiv>
    );
};

Comment.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Comment;
