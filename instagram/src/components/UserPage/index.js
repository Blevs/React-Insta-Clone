import React, { useState, useEffect } from 'react';
import { postsData } from '../../dummy-data.js';
import SearchBar from '../SearchBar';
import styled from 'styled-components';
import UserHeader from './UserHeader.js';
import UserPosts from './UserPosts.js';

const getUserPosts = (username) => (
  (JSON.parse(window.localStorage.getItem('posts')) || postsData)
    .map((post, idx) => ({...post, postidx: idx}))
    .filter(post => post.username === username)
);

const ContentDiv = styled.div`
display: flex;
width: 100%;
flex-flow: column;
align-items: center;
padding: 0 5%;
box-sizing: border-box;
background: #fafafa;
min-height: 90vh;
`;

const UserPage = ({match}) => {
  const username = match.params.username;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(getUserPosts(username));
  }, []);
  return (
    <div>
      <SearchBar/>
    <ContentDiv>
      <UserHeader username={username}
                  picture={posts[0] && posts[0].thumbnailUrl}
                  posts={posts.length}/>
      <UserPosts posts={posts} />
    </ContentDiv>
    </div>
  );
};

export default UserPage;
