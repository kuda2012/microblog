import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div>
      <Link to={`/${post.id}`}>{post.title}</Link>
      <div>Description: {post.description}</div>
    </div>
  );
};

export default PostCard;
