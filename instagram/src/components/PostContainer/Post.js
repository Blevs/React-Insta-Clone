import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

const likePop = keyframes`
0% {
  opacity: 0;
  transform: scale(0.5);
}
60% {
  opacity: 0.7;
  transform: scale(0.6);
}
100% {
  opacity: 0.0;
  transform: scale(0.2);
}
`;

const PostDiv = styled.div`
width: 100%;
height: 75vw;
max-height: 500px;
overflow: hidden;
position: relative;
&.liked::after {
  content: url(data:image/svg+xml,${encodeURIComponent(renderToString(<FontAwesomeIcon style={{color: "white"}} icon={faHeartSolid} />))});
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scale(0.5);
  top: 0;
  left: 0;
  opacity: 0.0;
  animation: ${likePop} 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;

const PostImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

const Post = ({imageUrl, handleLike, postid, liked}) => {
  return (
    <PostDiv className={liked ? "liked" : ""}
      onDoubleClick={() => handleLike(postid)}>
      <PostImg src={imageUrl} alt="" />
    </PostDiv>
  );
};

Post.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  handleLike: PropTypes.func.isRequired,
  liked: PropTypes.bool,
  postid: PropTypes.string.isRequired
};

export default Post;
