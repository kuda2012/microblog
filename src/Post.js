import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import PostContext from "./PostContext";
import PostForm from "./PostForm";
import "./Post.css";
const Post = () => {
  let { postId } = useParams();
  let history = useHistory();
  const { posts, setPostAdded, deletePost } = useContext(PostContext);
  let post;
  if (posts.posts) {
    post = posts.posts.filter((post) => post.id === Number(postId))[0];
  }
  if (!post) {
    history.push("/");
  }
  const [editingPost, setEditingPost] = useState(false);
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
      {post && !editingPost && (
        <div className="Post-container">
          <div className="Post">
            <h1>{post.title}</h1>
            <i>{post.description}</i>
            <p>{post.body}</p>
          </div>
          <div className="Post-buttons">
            <button className="btn btn-primary" onClick={() => prepPostEdit()}>
              Edit
            </button>
            <button
              className="btn btn-danger"
              id="Post-delete"
              onClick={() => {
                deletePost(post.id);
                setPostAdded(true);
              }}
            >
              Delete Post
            </button>
          </div>
        </div>
      )}
      {editingPost && <PostForm postData={formData} />}
    </>
  );
};

export default Post;
