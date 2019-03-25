import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostDiv = styled.div`
width: 100%;
height: 500px;
overflow: hidden;
`;

const PostImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

const Post = ({imageUrl}) => {
    return (
        <PostDiv>
          <PostImg src={imageUrl} alt="" />
        </PostDiv>
    );
};

Post.propTypes = {
    imageUrl: PropTypes.string.isRequired
};

export default Post;
