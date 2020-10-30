import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./actionCreators";

const Home = () => {
  const posts = useSelector((state) => state.posts).sort((a, b) =>
    a.votes > b.votes ? -1 : 1
  );
  const editing = useSelector((state) => state.editing);
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    if (editing) {
      dispatch({ type: "EDITING_MODE" });
    }
    if (posts.length === 0) {
      dispatch(getPosts());
    }
    if (Object.keys(post).length > 0) {
      dispatch({
        type: "RESET_POST",
      });
    }
  }, [dispatch, editing]);
  return (
    <div>
      <p>
        Welcome to Microblog. Where you communicate your thoughts in bite-sized
        pieces.
      </p>
      {posts.map((post) => {
        return <PostCard key={uuid()} post={post} />;
      })}
    </div>
  );
};

export default Home;
