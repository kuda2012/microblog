import React, { useEffect } from "react";
import Comment from "./Comment";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "./actionCreators";
import { v4 as uuid } from "uuid";
const Comments = ({ postId, post }) => {
  const dispatch = useDispatch();
  console.log(post);
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
