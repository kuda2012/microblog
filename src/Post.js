import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import PostContext from "./PostContext";
import PostForm from "./PostForm";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import "./Post.css";
import { useSelector } from "react-redux";
const Post = () => {
  let { postId } = useParams();
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
                onClick={() => prepPostEdit()}
              >
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
          <Comments post={post} />
          <CommentForm post={post} />
        </>
      )}
      {editingPost && <PostForm postData={formData} />}
    </>
  );
};

export default Post;
