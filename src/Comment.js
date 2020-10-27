import React, { useContext } from "react";
import PostContext from "./PostContext";
import "./Comment.css";

const Comment = ({ comment, postId }) => {
  const { adjustComment, setPostAdded } = useContext(PostContext);
  return (
    <li>
      {comment.text}
      <button
        className="btn btn-danger Comment-delete"
        onClick={() => {
          adjustComment("delete", postId, comment);
          setPostAdded(true);
        }}
      >
        X
      </button>
    </li>
  );
};

export default Comment;
