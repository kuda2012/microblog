import React, { useState, useEffect } from "react";
import "./CommentForm.css";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "./actionCreators";
const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const INITIAL_STATE = { text: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.text === "") return;
    dispatch(addComment(postId, formData));
    setFormData(INITIAL_STATE);
  };
  return (
    <>
      {post && (
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
      )}
    </>
  );
};

export default CommentForm;
