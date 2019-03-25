import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderDiv = styled.div`
display: flex;
flex-flow: row;
align-items: center;
padding: 15px 10px;
font-weight: bold;
`;

const ProfileImg = styled.img`
width: 30px;
height: 30px;
border-radius: 100%;
margin-right: 10px;
`;

const PostHeader = ({username, thumbnailUrl}) => {
    return (
        <HeaderDiv>
          <ProfileImg src={thumbnailUrl} alt="" />
          {username}
        </HeaderDiv>
    );
};

PostHeader.propTypes = {
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired
};

export default PostHeader;

