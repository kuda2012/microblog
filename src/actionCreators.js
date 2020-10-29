import axios from "axios";
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
      const { data } = await axios.delete(
        `http://localhost:5000/api/posts/${postId}`
      );
      dispatch(postDeleted(postId));
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
