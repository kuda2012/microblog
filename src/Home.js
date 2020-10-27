import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PostContext from "./PostContext";
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
          return (
            <>
              <div>
                <Link key={uuid()} to={`/${post.id}`}>
                  {post.title}
                </Link>
                <div>Description: {post.description}</div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Home;
