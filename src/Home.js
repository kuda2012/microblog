import React, { useContext } from "react";
import PostContext from "./PostContext";
import PostCard from "./PostCard";
import { v4 as uuid } from "uuid";
const Home = () => {
  const { posts } = useContext(PostContext);
  return (
    <div>
      <p>
        Welcome to Microblog. Where you communicate your thoughts in bite-sized
        pieces.
      </p>
      {posts.posts &&
        posts.posts.map((post) => {
          return <PostCard key={uuid()} post={post} />;
        })}
    </div>
  );
};

export default Home;
