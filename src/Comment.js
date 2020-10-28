import React, { useContext } from "react";
import PostContext from "./PostContext";
import "./Comment.css";
import { useDispatch } from "react-redux";

const Comment = ({ comment, postId }) => {
  const { adjustComment, setPostAdded } = useContext(PostContext);
  const dispatch = useDispatch();
  return (
    <li>
      {comment.text}
      <button
        className="btn btn-danger Comment-delete"
        onClick={() => {
          dispatch({
            type: "DELETE_COMMENT",
            payload: comment,
            postId: postId,
          });
        }}
      >
        X
      </button>
    </li>
  );
};

export default Comment;
