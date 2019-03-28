import { postsData, usersData } from '../dummy-data.js';

export const getUserPosts = (username) => (
  (JSON.parse(window.localStorage.getItem('posts')) || postsData)
    .map((post, idx) => ({...post, postidx: idx}))
    .filter(post => post.username === username)
);

export const getUserPostsWithLiked = (username, currentUser) => (
  getPostsWithLiked(currentUser)
    .map((post, idx) => ({...post, postidx: idx}))
    .filter(post => post.username === username)
);

const invalidUsernames = ['login', 'signup', 'admin'];

export const attemptSignup = (username, password) => {
  const users = JSON.parse(window.localStorage.getItem("users")) || usersData;
  if (users.find(user => user.username === username)) {
    return "Username taken";
  } else if (password === "") {
    return "Invalid Password";
  } else if (invalidUsernames.includes(username.toLowerCase())) {
    return "Invalid Username";
  } else {
    users.push({username: username.toLowerCase(), password: password});
    window.localStorage.setItem("users", JSON.stringify(users));
    return true;
  }
};

export const attemptLogin = (username, password) => {
  const users = JSON.parse(window.localStorage.getItem("users")) || usersData;
  const user = users.find(user => user.username === username.toLowerCase());
  if (user && user.password === password) {
    return true;
  } else {
    return false;
  }
};

export const getPosts = () => {
  return JSON.parse(window.localStorage.getItem("posts")) || postsData;
};

export const getPostsWithLiked = (username) => {
  const posts = getPosts();
  const likes = getUserLikes(username);
  Object.entries(likes).forEach(([postid, liked]) => {
    const postidx = posts.findIndex(({id}) => id === postid);
    posts[postidx].liked = liked;
  });
  return posts;
};

export const getUserLikes = (username) => {
  return (JSON.parse(window.localStorage.getItem(username + "Likes")) || {});
};

const setUserLikes = (username, likes) => {
  window.localStorage.setItem(username + "Likes", JSON.stringify(likes));
};

const setPosts = posts => {
  window.localStorage.setItem("posts", JSON.stringify(posts));
};

export const toggleLikePost = (postid, username) => {
  const posts = getPosts(username);
  const likes = getUserLikes(username);
  const idx = posts.findIndex(({id}) => id === postid);
  if (idx >= 0) {
    const post = posts[idx];
    const liked = likes[postid];
    post.likes = post.likes + (liked ? -1 : 1);
    likes[postid] = !liked;
    posts[idx] = post;
    setPosts(posts);
    setUserLikes(username, likes);
  }
};

export const addComment = (postid, username, text) => {
  const posts = getPosts();
  const idx = posts.findIndex(({id}) => id === postid);
  if (idx >= 0) {
    const post = posts[idx];
    const commentid = Date.now().toString();
    post.comments.push({id: commentid, username: username, text: text});
    posts[idx] = post;
    setPosts(posts);
    return commentid;
  }
  return false;
};

export const deleteComment = (postid, commentid) => {
  const posts = getPosts();
  const postidx = posts.findIndex(({id}) => id === postid);
  if (postidx >= 0) {
    const post = posts[postidx];
    const commentidx = post.comments.findIndex(({id}) => id === commentid);
    if (commentidx >= 0) {
      post.comments.splice(commentidx, 1);
      posts[postidx] = post;
      setPosts(posts);
      return true;
    }
  }
  return false;
};
