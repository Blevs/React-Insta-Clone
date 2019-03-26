import React, { Component } from 'react';
import { PostsPage } from './components/PostContainer';
import { withAuthenticate } from './authentication';
import LoginPage from './components/LoginPage';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const AuthedPostsPage = withAuthenticate(PostsPage)(LoginPage);
    return <AuthedPostsPage />;
    // return <PostsPage username={this.state.username} />;
  }
}

export default App;
