import React from "react";
import styled from 'styled-components';
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
top: 0;
background: white;
svg {
margin: 0 10px;
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
&:focus {
  text-align: left;
  background: white;
}
`;

const SearchBar = (props) => {
    return (
        <StyledHeader>
          <div className="logo">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <img alt="Instagram"/>
          </div>
          <StyledInput type="text"
                 placeholder="Search" />
          <div>
            <FontAwesomeIcon icon={faCompass} size="2x" />
            <FontAwesomeIcon icon={faHeart} size="2x" />
            <FontAwesomeIcon icon={faUser} size="2x" />
          </div>
        </StyledHeader>
    );
};

export default SearchBar;
