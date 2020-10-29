import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import PostForm from "./PostForm";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
import { getPost, deletePost } from "./actionCreators";

const Post = () => {
  let { postId } = useParams();
  const dispatch = useDispatch();
  let history = useHistory();
  const posts = useSelector((state) => state.posts);
  const post = posts.filter((post) => post.id == postId)[0];
  const editing = useSelector((state) => state.editing);

  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch]);
  if (!post) {
    history.push("/");
  }
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
                  dispatch(deletePost(postId));
                  history.push("/");
                }}
              >
                Delete Post
              </button>
            </div>
          </div>
          {<Comments postId={postId} />}
          <CommentForm postId={postId} />
        </>
      )}
      {editing && Object.keys(post).length != 0 && <PostForm post={post} />}
    </>
  );
};

export default Post;
