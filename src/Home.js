import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { v4 as uuid } from "uuid";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getPosts } from "./actionCreators";
import { isEqual } from "lodash";
const Home = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const editing = useSelector((state) => state.editing);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editing) {
      dispatch({ type: "EDITING_MODE" });
    }
    dispatch(getPosts());
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
