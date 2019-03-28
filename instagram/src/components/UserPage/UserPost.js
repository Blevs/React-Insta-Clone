import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

const ImageDiv = styled.div`
width: 200px;
height: 200px;
background: lightgrey;
img {
  width: 100%;
  object-fit: cover;
}
position: relative;
`;

const InfoDiv = styled.div`
opacity: 0;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: #00000055
transition: opacity 0.3s;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
user-select: none;
cursor: pointer;
&:hover, &:focus {
  opacity: 1;
}
span:first-of-type {
  margin-right: 10px;
}
`;

const UserPost = ({post, setDisplayPost}) => {
  return (
    <ImageDiv onClick={() => setDisplayPost(post)}>
      <InfoDiv>
        <FontAwesomeIcon icon={faHeart}/> <span>{post.likes}</span>
        <FontAwesomeIcon icon={faComment}/> <span>{post.comments.length}</span>
      </InfoDiv>
      <img alt="" src={post.imageUrl}/>
    </ImageDiv>
  );
};

export default UserPost;
