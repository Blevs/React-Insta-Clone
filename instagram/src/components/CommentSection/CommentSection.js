import React from 'react';
import Comment from './Comment.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as moment from 'moment';

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

const CommentSection = ({comments, likes, timestamp, postidx, addComment}) => {
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
          <Time>
            {moment(timestamp, 'MMMM Do YYYY, HH:mm:ss a').fromNow()}
          </Time>
          <form onSubmit={event => addComment(event, postidx)}>
            <CommentInput type="text"
                          name="comment"
                          placeholder="Add a comment..." />
          </form>
        </CommentDiv>
    );
};

CommentSection.propTypes = {
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    postidx: PropTypes.number.isRequired,
    addComment: PropTypes.func.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }))
};

export default CommentSection;
