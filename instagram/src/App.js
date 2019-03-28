import React, { Component } from 'react';
import { PostsPage } from './components/PostContainer';
import { withAuthenticate } from './authentication';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    const AuthedPostsPage = withAuthenticate(PostsPage)(LoginPage);
    return (
      <Router>
        <Route exact path="/" component={AuthedPostsPage}/>
      </Router>
    );
  }
}

export default App;
