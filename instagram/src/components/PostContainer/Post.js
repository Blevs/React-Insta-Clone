import React from 'react';

const Post = ({imageUrl}) => {
    return (
        <div>
          <img src={imageUrl} />
        </div>
    );
};

export default Post;
