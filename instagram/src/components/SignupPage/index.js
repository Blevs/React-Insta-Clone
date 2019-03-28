import React from 'react';
import { FullPageDiv, BoxDiv, UserForm, UserButton } from '../styles/';
import { Link } from 'react-router-dom';

const SignupPage = ({handleLogin}) => {
  return (
    <FullPageDiv>
      <BoxDiv>
        <h1>Sign Up</h1>
        <UserForm onSubmit={handleLogin}>
          <p>Do not use a real password. This is not a real application.</p>
          <input type="text" name="username" placeholder="Username"/>
          <input type="password" name="password" placeholder="Password"/>
          <input type="password" name="passwordVerify" placeholder="Verify Password"/>
          <UserButton type="submit" background="green">Sign Up</UserButton>
          <Link style={{width: "100%"}} to="/">
            <UserButton>Log In</UserButton>
          </Link>
        </UserForm>
      </BoxDiv>
    </FullPageDiv>
  );
};

export default SignupPage;
