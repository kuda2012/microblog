import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import PostForm from "./PostForm";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
import { getPost, deletePost, vote } from "./actionCreators";

const Post = () => {
  let { postId } = useParams();
  const dispatch = useDispatch();
  let history = useHistory();
  const post = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);
  const editing = useSelector((state) => state.editing);
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
              <span className="VoteBox">
                {post.votes} votes{" "}
                <span onClick={() => dispatch(vote(post.id, "up"))}>👍</span>
                <span onClick={() => dispatch(vote(post.id, "down"))}>👎🏽</span>
              </span>
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
          {<Comments />}
          <CommentForm postId={postId} />
        </>
      )}
      {editing && Object.keys(post).length != 0 && <PostForm post={post} />}
    </>
  );
};

export default Post;
