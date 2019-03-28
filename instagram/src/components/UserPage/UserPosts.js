import React from 'react';
import styled from 'styled-components';
import UserPost from './UserPost.js';

const PostsDiv = styled.div`
flex-flow: row wrap;
justify-content: space-around;
`;

const UserPosts = ({posts}) => {
  return (
    <PostsDiv>
      {posts.map((post) => <UserPost post={post} />)}
    </PostsDiv>
  );
};

export default UserPosts;
