import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Router from "./Router";
import PostContext from "./PostContext";
function App() {
  const [posts, setPosts] = useState({ posts: [] });
  const addPost = (post) => {
    setPosts((posts) => {
      console.log(posts);
      return posts.posts.push(post);
    });
  };
  console.log(posts);
  return (
    <div className="App">
      <NavBar />
      <PostContext.Provider value={{ posts, addPost }}>
        <Router />
      </PostContext.Provider>
    </div>
  );
}

export default App;
