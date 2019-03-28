import React from 'react';
import { usersData } from '../dummy-data.js';

const attemptLogin = (username, password) => {
  const users = JSON.parse(window.localStorage.getItem("users")) || usersData;
  const user = users.find(user => user.username === username.toLowerCase());
  if (user && user.password === password) {
    return true;
  } else {
    return false;
  }
};

const setUsernameCookie = username => window.localStorage.setItem("usernameCookie", JSON.stringify(username));
const getUsernameCookie = username => JSON.parse(window.localStorage.getItem("usernameCookie"));

const withAuthenticate = ProtectedComponent => LoginComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.props = props;
      this.localUsernameKey = "username";
      this.state = {
        loggedIn: false,
        username: null
      };
    }
    handleLogin = (event) => {
      event.preventDefault();
      const username = event.target.username.value.trim();
      const password = event.target.password.value;
      if (attemptLogin(username, password)) {
        setUsernameCookie(username);
        this.setState({
          loggedIn: true,
          username: username
        });
      }
    };
    handleLogout = (event) => {
      event.preventDefault();
      setUsernameCookie(null);
      this.setState({
        loggedIn: false,
        username: null
      });
    };
    componentDidMount() {
      const username = getUsernameCookie();
      this.setState({
        loggedIn: Boolean(username),
        username: username
      });
    }
    render() {
      if (this.state.loggedIn) {
        return <ProtectedComponent {...this.props}
                                   username={this.state.username}
                                   handleLogout={this.handleLogout} />;
      } else {
        return <LoginComponent handleLogin={this.handleLogin}/>;
      }
    }
  };
};

export { withAuthenticate };
