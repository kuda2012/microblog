import React, { useEffect } from "react";
import Comment from "./Comment";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getPost } from "./actionCreators";
import { v4 as uuid } from "uuid";
const Comments = ({ postId }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);
  return (
    <>
      {post.comments && (
        <ul>
          <h3>Comments</h3>
          {post.comments.map((comment) => (
            <Comment key={uuid()} comment={comment} postId={post.id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Comments;
