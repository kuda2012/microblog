import React, { useContext, useState } from "react";
import PostContext from "./PostContext";
import "./CommentForm.css";
import { useDispatch } from "react-redux";
const CommentForm = ({ post }) => {
  const { setPostAdded, adjustComment } = useContext(PostContext);
  const dispatch = useDispatch();
  const INITIAL_STATE = { text: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.text === "") return;
    formData["id"] = post["comments"].length;
    dispatch({ type: "ADD_COMMENT", payload: formData, postId: post.id });
    // adjustComment("add", post.id, formData);
    setFormData(INITIAL_STATE);
    // setPostAdded(true);
  };
  return (
    <form onSubmit={handleSubmit} className="CommentForm">
      <input
        type="text"
        placeholder="New Comment"
        name="text"
        value={formData.text}
        onChange={handleChange}
        className="CommentForm-input"
      />
      <button className="btn btn-primary CommentForm-add">Add</button>
    </form>
  );
};

export default CommentForm;
