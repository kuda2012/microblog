import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
      <Route exact path="/posts/:postId">
        <Post />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Router;
