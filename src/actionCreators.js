import axios from "axios";
import { functionsIn } from "lodash";
export function getPosts() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("http://localhost:5000/api/posts");
      dispatch(gotPosts(data));
    } catch (error) {}
  };
}

export function addPost(formData) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/posts",
        formData
      );
      dispatch(postCreated(data));
    } catch (error) {}
  };
}

export function getPost(postId) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/posts/${postId}`
      );
      dispatch(gotPost(data));
    } catch (error) {}
  };
}

export function editPost(formData) {
  return async function (dispatch) {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/posts/${formData.id}`,
        formData
      );
      dispatch(postEdited(data));
    } catch (error) {}
  };
}
export function deletePost(postId) {
  return async function (dispatch) {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${postId}`);
      dispatch(postDeleted(postId));
    } catch (error) {}
  };
}

export function addComment(postId, formData) {
  return async function (dispatch) {
    try {
      await axios.post(
        `http://localhost:5000/api/posts/${postId}/comments`,
        formData
      );
      dispatch(commentAdded(postId));
    } catch (error) {}
  };
}
export function getComments(postId) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/posts/${postId}/comments`
      );
      dispatch(gotComments(data, postId));
    } catch (error) {}
  };
}
export function gotPosts(posts) {
  return {
    type: "GET_POSTS",
    posts,
  };
}
export function gotPost(post) {
  return {
    type: "GET_POST",
    post,
  };
}

export function postCreated(post) {
  return {
    type: "ADD_POST",
    post,
  };
}

export function postEdited(post) {
  return {
    type: "EDIT_POST",
    post,
  };
}
export function postDeleted(postId) {
  return {
    type: "DELETE_POST",
    postId,
  };
}

export function commentAdded(postId) {
  return {
    type: "ADD_COMMENT",
    postId,
  };
}
export function gotComments(comments, postId) {
  return {
    type: "GET_COMMENTS",
    comments,
    postId,
  };
}
