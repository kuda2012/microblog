import React from "react";
import { Switch, Route } from "react-router-dom";
import FormPost from "./PostForm";
import Post from "./Post";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/new">
        <FormPost />
      </Route>
      <Route exact path="/:postId">
        <Post />
      </Route>
    </Switch>
  );
};

export default Router;
