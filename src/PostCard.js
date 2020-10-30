import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { vote } from "./actionCreators";
import "./PostCard.css";
const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
        <span className="VoteBox">
          {post.votes} votes{" "}
          <span onClick={() => dispatch(vote(post.id, "up"))}>👍</span>
          <span onClick={() => dispatch(vote(post.id, "down"))}>👎🏽</span>
        </span>
      </div>
      <div>Description: {post.description}</div>
    </div>
  );
};

export default PostCard;
