import React from 'react';

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
      // const password = event.target.password.value;
      if (username !== "") {
        window.localStorage.setItem(this.localUsernameKey, JSON.stringify(username));
        this.setState({
          loggedIn: true,
          username: username
        });
      }
    };
    handleLogout = (event) => {
      event.preventDefault();
        window.localStorage.setItem(this.localUsernameKey, JSON.stringify(null));
        this.setState({
          loggedIn: false,
          username: null
        });
    };
    componentDidMount() {
      const username = JSON.parse(window.localStorage.getItem(this.localUsernameKey));
      console.log("storage", username);
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
