import React from 'react';
import styled from 'styled-components';

const ProfilePictureDiv = styled.div`
width: 150px;
height: 150px;
border-radius: 100%;
overflow: hidden;
background-image: linear-gradient(lightgrey, grey);
border: 2px solid grey;
img {
  object-fit: cover;
  width: 100%;
}
`;

const InfoDiv = styled.div`
span {
  font-weight: bold;
}
`;

const ContainerDiv = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-around;
align-items: center;
width: 100%;
max-width: 600px;
margin: 20px 0;
padding-bottom: 20px;
border-bottom: 1px solid lightgrey;
`;


const UserHeader = ({picture, username, posts}) => {
  return (
    <ContainerDiv>
      <ProfilePictureDiv>
        <img src={picture} alt=""/>
      </ProfilePictureDiv>
      <div>
        <h1>{username}</h1>
        <InfoDiv>
          <span>{posts}</span> posts
        </InfoDiv>
      </div>
    </ContainerDiv>
  );
};

export default UserHeader;
