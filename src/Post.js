import React, { useContext, useState } from "react";
import PostContext from "./PostContext";
const Post = () => {
  const { posts } = useContext(PostContext);
  console.log(posts);
};

export default Post;
