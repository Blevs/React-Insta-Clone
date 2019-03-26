import React from 'react';

const LoginPage = ({handleLogin}) => {
  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
        <input type="text" name="username" placeholder="login"/>
        <input type="password" name="password" placeholder="password"/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
