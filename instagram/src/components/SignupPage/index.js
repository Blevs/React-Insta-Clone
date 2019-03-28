import React, { useState } from 'react';
import { FullPageDiv, BoxDiv, UserForm, UserButton } from '../styles/';
import { Link } from 'react-router-dom';
import { attemptSignup } from '../../clientapi';

const SignupPage = ({handleLogin, history}) => {
  const [signupError, setSignupError] = useState(false);
  const handleSignup = event => {
    event.preventDefault();
    const username = event.target.username.value.trim();
    const password = event.target.password.value;
    const password2 = event.target.passwordVerify.value;
    if (username === "") {
      setSignupError("Blank username.");
    } else if (password !== password2) {
      setSignupError("Passwords do not match.");
    } else {
      const val = attemptSignup(username, password);
      if (typeof val === 'string') {
        setSignupError(val);
      } else {
        setSignupError(null);
        history.push('/');
      }
    }
  };
  return (
    <FullPageDiv>
      <BoxDiv>
        <h1>Sign Up</h1>
        <UserForm onSubmit={handleSignup}>
          <p>Do not use a real password. This is not a real application.</p>
          {signupError && <p style={{color: "red"}}>{signupError}</p>}
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
