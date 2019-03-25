import React from 'react';
import Comment from './Comment.js';

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

export default CommentSection;
