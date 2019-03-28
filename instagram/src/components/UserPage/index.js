import React, { useState, useEffect } from 'react';
import { postsData } from '../../dummy-data.js';
import SearchBar from '../SearchBar';
import styled from 'styled-components';
import UserHeader from './UserHeader.js';
import UserPosts from './UserPosts.js';
import PostContainer from '../PostContainer';

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

const ModalDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #00000055;
position: fixed;
min-height: 100vh;
min-width: 100vw;
z-index: 100;
cursor: pointer;
* {
  cursor: auto;
}
`;

const UserPage = ({match}) => {
  const username = match.params.username;
  const [posts, setPosts] = useState([]);
  const [displayPost, setDisplayPost] = useState(null);
  useEffect(() => {
    setPosts(getUserPosts(username));
  }, []);
  return (
    <div>
      {displayPost && <ModalDiv id="modalbg"
                                onClick={event => event.target.id === "modalbg"
                                         && setDisplayPost(null)}>
                        <PostContainer {...displayPost}/>
                      </ModalDiv>}
      <SearchBar/>
      <ContentDiv>
        <UserHeader username={username}
                    picture={posts[0] && posts[0].thumbnailUrl}
                    posts={posts.length}/>
        <UserPosts posts={posts} setDisplayPost={setDisplayPost}/>
      </ContentDiv>
    </div>
  );
};

export default UserPage;
