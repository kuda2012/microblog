import React from "react";
import Comment from "./Comment";
import { v4 as uuid } from "uuid";
const Comments = ({ post }) => {
  return (
    <ul>
      <h3>Comments</h3>
      {post.comments.map((comment) => (
        <Comment key={uuid()} comment={comment} postId={post.id} />
      ))}
    </ul>
  );
};

export default Comments;
