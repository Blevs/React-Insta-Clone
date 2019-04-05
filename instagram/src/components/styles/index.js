import styled, { css } from 'styled-components';

export const FullPageDiv = styled.div`
min-height: 100vh;
width: 100vw;
box-sizing: border-box;
background: #fafafa;
padding: 10% 5%;
display: flex;
align-items: center;
justify-content: center;
`;

export const BoxDiv = styled.div`
background: white;
border: 1px solid lightgrey;
display: flex;
flex-flow: column;
box-shadow: 0 0 3px lightgrey;
text-align: center;
box-sizing: border-box;
padding: 5% 10%;
display: flex;
flex-flow: column;
justify-content: space-between;
width: 100%;
max-width: 600px;
h1 {
  margin: 0;
  padding: 0 0 25% 0;
}
`;

export const UserForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
* {
  margin-bottom: 20px;
}
input {
  box-sizing: border-box;
  border: 1px solid lightgrey;
  background: white;
  width: 100%;
  padding: 10px 10px;
  transition: border-color 0.3s, box-shadow 0.3s;
  &:hover {
    border: 1px solid lightblue;
  }
  &:focus {
    border: 1px solid #a3d0f7;
    box-shadow: 0 0 2px lightblue;
  }
}
`;

export const UserButton = styled.button`
color: white;
max-width: 400px;
width: 100%;
cursor: pointer;
background: #3897f0
border-radius: 5px;
border: none;
box-sizing: border-box;
${props =>
  props.background && css`
    background: ${props.background}
  `}
padding: 15px 0;
font-weight: bold;
a {
  color: white;
}
a:link {
  text-decoration: none;
}
`;
