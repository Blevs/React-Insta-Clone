import React from 'react';
import PropTypes from 'prop-types';

const Post = ({imageUrl}) => {
    return (
        <div>
          <img src={imageUrl} alt="" />
        </div>
    );
};

Post.propTypes = {
    imageUrl: PropTypes.string.isRequired
};

export default Post;
