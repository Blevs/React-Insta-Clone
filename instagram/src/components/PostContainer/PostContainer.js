import React from 'react';
import CommentSection from '../CommentSection';
import PostHeader from './PostHeader.js';
import Post from './Post.js';
import PropTypes from 'prop-types';

const PostContainer = ({username, thumbnailUrl, imageUrl, likes, timestamp, comments}) => {
    return (
        <div>
          <PostHeader username={username}
                      thumbnailUrl={thumbnailUrl}/>
          <Post imageUrl={imageUrl} />
          <CommentSection comments={comments}
                          likes={likes}
                          timestamp={timestamp} />
        </div>
    );
};

PostContainer.propTypes = {
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }))
};

export default PostContainer;
