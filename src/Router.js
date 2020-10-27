import React from "react";
import { Switch, Route } from "react-router-dom";
import PostForm from "./PostForm";
import Post from "./Post";
import Home from "./Home";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/new">
        <PostForm />
      </Route>
      <Route exact path="/:postId">
        <Post />
      </Route>
    </Switch>
  );
};

export default Router;
