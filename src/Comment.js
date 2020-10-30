import React from "react";
import "./Comment.css";
import { useDispatch } from "react-redux";
import { deleteComment } from "./actionCreators";
const Comment = ({ comment, postId }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {comment.text}
      <span
        className="Comment-delete"
        onClick={() => {
          dispatch(deleteComment(postId, comment.id));
        }}
      >
        ❌
      </span>
    </li>
  );
};

export default Comment;
