import React, { Component } from 'react';
import { PostsPage } from './components/PostContainer';
import { withAuthenticate } from './authentication';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    const AuthedPostsPage = withAuthenticate(PostsPage)(LoginPage);
    return (
      <Router>
        <Route exact path="/" component={AuthedPostsPage}/>
        <Route path="/signup" component={SignupPage}/>
      </Router>
    );
  }
}

export default App;
