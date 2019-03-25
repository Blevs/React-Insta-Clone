import React from 'react';
import Comment from './Comment.js';
import PropTypes from 'prop-types';

const CommentSection = ({comments, likes, timestamp}) => {
    return (
        <div>
          <div>
            <a>H</a>
            <a>C</a>
          </div>
          <div>
            {likes} likes
          </div>
          {comments.map(comment => (
              <Comment {...comment} key={comment.id}/>
          ))}
          <div>
            {timestamp}
          </div>
          <input type="text"
                 placeholder="Add a comment..." />
        </div>
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
