import React, { Component } from 'react';
import { PostsPage } from './components/PostContainer';
import { withAuthenticate } from './authentication';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import UserPage from './components/UserPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    const AuthedPostsPage = withAuthenticate(PostsPage)(LoginPage);
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AuthedPostsPage}/>
          <Route exact path="/signup" component={SignupPage}/>
          <Route path="/:username" component={UserPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
