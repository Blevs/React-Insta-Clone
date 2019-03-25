import React from 'react';

const Comment = ({username, text}) => {
    return (
        <div>
          <div>{username}</div>
          <div>{text}</div>
        </div>
    );
};

export default Comment;
