import React from 'react';
import styled from 'styled-components';

const PageDiv = styled.div`
min-height: 100vh;
width: 100vw;
box-sizing: border-box;
background: #fafafa;
padding: 10% 5%;
display: flex;
align-items: center;
justify-content: center;
`;

const LoginDiv = styled.div`
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
h1 {
  margin: 0;
  padding: 0 0 25% 0;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    color: white;
    max-width: 400px;
    width: 100%;
    background: #3897f0;
    border: 4px solid #3897f0;
    border-radius: 5px;
    padding: 10px 0;
    font-weight: bold;
    transition: background 0.3s, box-shadow 0.3s;;
    &:hover, &:focus {
      box-shadow: inset 0 0 10px #3897f0;
      background: #2490E0;
    }
  }
  input {
    border: 1px solid lightgrey;
    background: white;
    width: 100%;
    margin-bottom: 20px;
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
}
`;

const LoginPage = ({handleLogin}) => {
  return (
    <PageDiv>
      <LoginDiv>
        <h1>Log In</h1>
        <form onSubmit={handleLogin}>
          <input type="text" name="username" placeholder="Username"/>
          <input type="password" name="password" placeholder="Password"/>
          <button type="submit">Log In</button>
        </form>
      </LoginDiv>
    </PageDiv>
  );
};

export default LoginPage;
