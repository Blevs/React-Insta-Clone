import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { getPosts } from '../../clientapi';
import Fuse from 'fuse.js';

const StyledHeader = styled.header`
box-sizing: border-box;
display: flex;
flex-flow: row;
align-items: center;
justify-content: space-between;
width: 100%;
padding: 0 10px;
height: 75px;
border-bottom: 1px solid lightgrey;
position: sticky;
z-index: 5;
top: 0;
background: white;
.nav-icons {
  display: flex;
}
svg {
  margin: 0 10px;
  @media (max-width: 600px) {
    margin: 0 3px;
  }
}
img {
  @media (max-width: 600px) {
    display: none;
  }
}
.logo svg:first-child {
  padding-right: 10px;
  margin-left: 0;
  border-right: 1px solid black;
}
.results {
position: absolute;
top: 100%;
width: 100%;
background: #fafafa
a {
color: black;
display: block;
text-align: center;
padding: 10px;
border: 1px solid grey;
}
a:link {
text-decoration: none;
}
}
`;

const StyledInput = styled.input`
text-align: center;
background: #fafafa;
border: 1px solid lightgrey;
border-radius: 3px;
font-size: 16px;
padding: 3px 10px;
width: 100%;
max-width: 300px;
box-sizing: border-box;
&:focus {
  text-align: left;
  background: white;
}
`;

const Clear = styled.div`
position: absolute;
right: 3px;
top: 15%;
margin: 0;
padding: 0;
box-sizing: border-box;
color: #fafafa;
background: #AAAAAA;
border: none;
border-radius: 100%;
height: 20px;
width: 20px;
text-align: center;
cursor: pointer;
transition: background 0.3s;
user-select: none;
&:hover, &:active {
  background: grey;
}
`;

const SearchBar = ({handleLogout}) => {
  const [usersWithPosts, setUsersWithPosts] = useState([]);
  useEffect(() => {
    setUsersWithPosts([...new Set(getPosts().map(post => ({username: post.username})))]);
  });
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    setResults((new Fuse(usersWithPosts, {keys: ['username']}).search(search)));
  }, [search]);
  return (
    <StyledHeader>
      <div className="logo">
        <Link to="/" style={{color: "black"}}>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <img alt="Instagram"/>
        </Link>
      </div>
      <form style={{position: "relative"}}>
        <StyledInput type="text"
                     name="search"
                     value={search}
                     onChange={event => setSearch(event.target.value)}
                     placeholder="Search" />
        {search !== ""
         &&
         <Clear onClick={event => setSearch("")}>
           &times;
         </Clear>}
        <div className="results">
          {results.map(({username}, idx) => <Link key={idx}
                                                  onClick={() => setSearch("")}
                                                  to={"/"+username}>{username}</Link>)}
        </div>
      </form>
      <div className="nav-icons">
        <FontAwesomeIcon icon={faCompass} size="2x" />
        <FontAwesomeIcon icon={faHeart} size="2x" />
    <FontAwesomeIcon icon={faUser} size="2x" onClick={handleLogout} style={{cursor: "pointer"}}/>
      </div>
    </StyledHeader>
  );
};

SearchBar.propTypes = {
  handleLogout: PropTypes.func.isRequired
};

export default SearchBar;
