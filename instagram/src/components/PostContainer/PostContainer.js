import React from 'react';
import CommentSection from '../CommentSection';
import PostHeader from './PostHeader.js';
import Post from './Post.js';

const PostContainer = ({username, thumbnailUrl, imageUrl, likes, timestamp, comments}) => {
    return (
        <div>
          <PostHeader username={username} />
          <Post imageUrl={imageUrl} />
          <CommentSection comments={comments}
                          likes={likes}
                          timestamp={timestamp} />
        </div>
    );
};

export default PostContainer;
