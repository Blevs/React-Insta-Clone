import React from 'react';
import { FullPageDiv, BoxDiv, UserForm, UserButton } from '../styles/';
import { Link } from 'react-router-dom';

const LoginPage = ({handleLogin}) => {
  return (
    <FullPageDiv>
      <BoxDiv>
        <h1>Log In</h1>
        <UserForm onSubmit={handleLogin}>
          <input type="text" name="username" placeholder="Username"/>
          <input type="password" name="password" placeholder="Password"/>
          <UserButton type="submit">Log In</UserButton>
          <Link style={{width: "100%"}} to="/signup">
            <UserButton background="green">Sign Up</UserButton>
          </Link>
        </UserForm>
      </BoxDiv>
    </FullPageDiv>
  );
};

export default LoginPage;
