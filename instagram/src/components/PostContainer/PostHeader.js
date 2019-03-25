import React from 'react';

const PostHeader = ({username, thumbnailUrl}) => {
    return (
        <div>
          <img src={thumbnailUrl}/>
          {username}
        </div>
    );
};

export default PostHeader;

