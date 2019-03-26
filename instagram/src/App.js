import React, { Component } from 'react';
import { PostsPage } from './components/PostContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.localStorageKey = "instaRoot";
    this.state = {
      username: "blevs"
    };
  }
  componentDidMount() {
    // initialize data
    this.setState(
      JSON.parse(window.localStorage.getItem(this.localStorageKey))
      || {
        username: "blevs"
      }
    );
    // refresh and leave update local storage
    window.addEventListener(
      "beforeunload",
      () => window.localStorage.setItem(this.localStorageKey, JSON.stringify(this.state))
    );
  }
  render() {
    return <PostsPage username={this.state.username} />;
  }
}

export default App;
