import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

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

const SearchBar = ({search, handleInput, handleSearch}) => {
  return (
    <StyledHeader>
      <div className="logo">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <img alt="Instagram"/>
      </div>
      <form onSubmit={handleSearch}>
        <StyledInput type="text"
                     name="search"
                     value={search}
                     onChange={handleInput}
                     placeholder="Search" />
      </form>
      <div className="nav-icons">
        <FontAwesomeIcon icon={faCompass} size="2x" />
        <FontAwesomeIcon icon={faHeart} size="2x" />
        <FontAwesomeIcon icon={faUser} size="2x" />
      </div>
    </StyledHeader>
  );
};

SearchBar.defaultProps = {
  search: "",
};

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired
};

export default SearchBar;
