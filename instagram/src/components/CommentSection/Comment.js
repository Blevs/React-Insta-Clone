import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({username, text}) => {
    return (
        <div>
          <div>{username}</div>
          <div>{text}</div>
        </div>
    );
};

Comment.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Comment;
