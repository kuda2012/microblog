import React from "react";
import PostCard from "./PostCard";
import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";
const Home = () => {
  const posts = useSelector((state) => state.posts);
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
