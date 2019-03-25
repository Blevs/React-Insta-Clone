import React from "react";
import styled from 'styled-components';

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
position: fixed;
background: white;
img:first-child {
  padding-right: 10px;
  margin-right: 10px;
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
          <div>
            <img alt="logo"/>
            <img alt="instagram"/>
          </div>
          <StyledInput type="text"
                 placeholder="Search" />
          <div>
            <a href="/">D</a>
            <a href="/">L</a>
            <a href="/">P</a>
          </div>
        </StyledHeader>
    );
};

export default SearchBar;
