import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import PostContext from "./PostContext";
import PostForm from "./PostForm";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
const Post = () => {
  let { postId } = useParams();
  const dispatch = useDispatch();
  let history = useHistory();
  const { setPostAdded, deletePost } = useContext(PostContext);
  const posts = useSelector((state) => state.posts);
  let post;
  if (posts) {
    post = posts.filter((post) => post.id === Number(postId))[0];
  }
  if (!post) {
    history.push("/");
  }
  const [editingPost, setEditingPost] = useState(false);
  const editing = useSelector((state) => state.editing);
  const [formData, setFormData] = useState({
    title: post ? post.title : "",
    description: post ? post.description : "",
    body: post ? post.body : "",
    id: post ? post.id : "",
  });
  const prepPostEdit = () => {
    setEditingPost(true);
  };
  return (
    <>
      {post && !editing && (
        <>
          <div className="Post-container">
            <div className="Post">
              <h1>{post.title}</h1>
              <i>{post.description}</i>
              <p>{post.body}</p>
            </div>
            <div className="Post-buttons">
              <button
                className="btn btn-primary"
                onClick={() => dispatch({ type: "EDITING_MODE" })}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                id="Post-delete"
                onClick={() => {
                  dispatch({ type: "DELETE_POST", payload: post.id });
                  history.push("/");
                }}
              >
                Delete Post
              </button>
            </div>
          </div>
          <Comments post={post} />
          <CommentForm post={post} />
        </>
      )}
      {editing && <PostForm postData={formData} />}
    </>
  );
};

export default Post;
