import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({username, thumbnailUrl}) => {
    return (
        <div>
          <img src={thumbnailUrl} alt="" />
          {username}
        </div>
    );
};

PostHeader.propTypes = {
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired
};

export default PostHeader;

