import React from 'react';
import styled from 'styled-components';

const ImageDiv = styled.div`
width: 200px;
height: 200px;
background: lightgrey;
img {
  width: 100%;
  object-fit: cover;
}
`;

const UserPost = ({post}) => {
  return (
    <ImageDiv>
      <img alt="" src={post.imageUrl}/>
    </ImageDiv>
  );
};

export default UserPost;
