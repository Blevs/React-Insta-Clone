import React, { Component } from 'react';
import { PostsPage } from './components/PostContainer';
import { withAuthenticate } from './authentication';
import LoginPage from './components/LoginPage';

class App extends Component {
  render() {
    const AuthedPostsPage = withAuthenticate(PostsPage)(LoginPage);
    return <AuthedPostsPage />;
  }
}

export default App;
