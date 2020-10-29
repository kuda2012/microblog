import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPost, editPost } from "./actionCreators";
import "./PostForm.css";

const PostForm = ({ post }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const INITIAL_STATE = post
    ? post
    : {
        title: "",
        description: "",
        body: "",
      };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title === "" || formData.body === "") return;
    if (!post) {
      dispatch(addPost(formData));
    } else {
      dispatch(editPost(formData));
      dispatch({ type: "EDITING_MODE" });
    }

    history.push(post ? `/posts/${post.id}` : "/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="PostForm">
        <h2>New Post</h2>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="body">Body:</label>
        <textarea
          rows="10"
          cols="50"
          name="body"
          id="body"
          value={formData.body}
          onChange={handleChange}
        ></textarea>
        <div>
          <button className="btn btn-primary" color="secondary">
            Save
          </button>
          <input
            className="btn btn-secondary"
            id="cancel"
            type="button"
            value="Cancel"
            onClick={() => {
              dispatch({ type: "EDITING_MODE" });
              history.push(post ? `/posts/${post.id}` : "/");
            }}
          />
        </div>
      </form>
    </div>
  );
};
export default PostForm;
