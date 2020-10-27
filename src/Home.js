import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PostContext from "./PostContext";
import { v4 as uuid } from "uuid";
const Home = () => {
  const { posts } = useContext(PostContext);
  return (
    <div>
      {posts.posts &&
        posts.posts.map((post) => {
          return (
            <Link key={uuid()} to={`/${post.id}`}>
              {post.title}
            </Link>
          );
        })}
    </div>
  );
};

export default Home;
