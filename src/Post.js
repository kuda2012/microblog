import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import PostForm from "./PostForm";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "./actionCreators";
const Post = () => {
  let { postId } = useParams();
  const dispatch = useDispatch();
  let history = useHistory();
  const { post, editing } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch]);
  if (!post) {
    history.push("/");
  }
  const [formData, setFormData] = useState({
    title: post ? post.title : "",
    description: post ? post.description : "",
    body: post ? post.body : "",
    id: post ? post.id : "",
  });
  return (
    <>
      {Object.keys(post).length != 0 && !editing && (
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
          {<Comments postId={postId} post={post} />}
          <CommentForm post={post} />
        </>
      )}
      {editing && <PostForm postData={formData} post={post} />}
    </>
  );
};

export default Post;
