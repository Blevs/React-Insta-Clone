import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar';
import styled from 'styled-components';
import UserHeader from './UserHeader.js';
import UserPosts from './UserPosts.js';
import PostContainer from '../PostContainer';
import { getUserPosts, getUserPostsWithLiked } from '../../clientapi';

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

const getUsernameCookie = () => JSON.parse(window.localStorage.getItem("usernameCookie"));

const UserPage = ({match}) => {
  const currentUser = getUsernameCookie();
  console.log(currentUser);
  const username = match.params.username;
  const [posts, setPosts] = useState([]);
  const [displayPost, setDisplayPost] = useState(null);
  useEffect(() => {
    setPosts(currentUser ? getUserPostsWithLiked(username, currentUser) : getUserPosts(username));
  }, []);
  return (
    <div>
      {displayPost && <ModalDiv id="modalbg"
                                onClick={event => event.target.id === "modalbg"
                                         && setDisplayPost(null)}>
                        <PostContainer post={displayPost} currentUser={currentUser} />
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
