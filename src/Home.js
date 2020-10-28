import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { getPostsFromApi } from "./actionCreators";
const Home = () => {
  const { posts, editing } = useSelector((state) => state);
  const dispatch = useDispatch();
  if (editing) {
    dispatch({ type: "EDITING_MODE" });
  }
  useEffect(() => {
    dispatch(getPostsFromApi());
  }, [dispatch]);
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
