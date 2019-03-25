import React from 'react';
import Comment from './Comment.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
margin-top: 10px;
margin-bottom: 0;
padding: 20px 0;
font-size: 1.0rem;
font-weight: bold;
`;

const CommentSection = ({comments, likes, timestamp}) => {
    return (
        <CommentDiv>
          <div>
            <a>H</a>
            <a>C</a>
          </div>
          <Likes>
            {likes} likes
          </Likes>
          {comments.map(comment => (
              <Comment {...comment} key={comment.id}/>
          ))}
          <div>
            {timestamp}
          </div>
          <CommentInput type="text"
                        placeholder="Add a comment..." />
        </CommentDiv>
    );
};

CommentSection.propTypes = {
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }))
};

export default CommentSection;
