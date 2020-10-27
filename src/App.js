import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Router from "./Router";
import PostContext from "./PostContext";
function App() {
  let history = useHistory();
  const [posts, setPosts] = useState({});
  const [postAdded, setPostAdded] = useState(false);
  useEffect(() => {
    setPostAdded(false);
  }, [postAdded]);
  const addPost = (post) => {
    setPosts((posts) => {
      if (Object.keys(posts).length === 0) {
        let startArray = [];
        startArray.push(post);
        posts["posts"] = startArray;
      } else if (posts["posts"].filter((post2) => post2.id === post.id)[0]) {
        posts["posts"][post.id] = post;
      } else {
        posts["posts"].push(post);
      }
      return posts;
    });
  };
  const deletePost = (postId) => {
    setPosts((posts) => {
      if (postId === posts["posts"].length) {
        posts["posts"] = posts["posts"].slice(0, postId);
      } else {
        posts["posts"] = [
          ...posts["posts"].slice(0, postId),
          ...posts["posts"].slice(postId + 1),
        ];
      }

      posts["posts"] = posts["posts"].map((post, i) => {
        post["id"] = i;
        return post;
      });
      return posts;
    });
    history.push("/");
  };
  const adjustComment = (verb, postId, comment) => {
    setPosts((posts) => {
      if (verb === "add") {
        posts["posts"] = posts["posts"].map((post) => {
          if (post["id"] === postId) {
            post["comments"].push(comment);
          }
          return post;
        });
      } else {
        posts["posts"] = posts["posts"].map((post) => {
          if (comment.id === post["comments"].length) {
            post["comments"] = post["comments"].slice(0, comment.id);
          } else {
            post["comments"] = [
              ...post["comments"].slice(0, comment.id),
              ...post["comments"].slice(comment.id + 1),
            ];
          }
          post["comments"] = post["comments"].map((comment, i) => {
            comment.id = i;
            return comment;
          });
          return post;
        });
      }
      return posts;
    });
  };
  return (
    <div className="App">
      <NavBar />
      <PostContext.Provider
        value={{ posts, addPost, setPostAdded, deletePost, adjustComment }}
      >
        <Router />
      </PostContext.Provider>
    </div>
  );
}

export default App;
