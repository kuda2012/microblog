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
      await axios.put(
        `http://localhost:5000/api/posts/${formData.id}`,
        formData
      );
      const { data } = await axios.get(
        `http://localhost:5000/api/posts/${formData.id}`
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
      const { data } = await axios.get(
        `http://localhost:5000/api/posts/${postId}`
      );
      dispatch(commentAdded(data));
    } catch (error) {}
  };
}

export function deleteComment(postId, commentId) {
  return async function (dispatch) {
    try {
      await axios.delete(
        `http://localhost:5000/api/posts/${postId}/comments/${commentId}`
      );
      const { data } = await axios.get(
        `http://localhost:5000/api/posts/${postId}`
      );
      dispatch(commentDeleted(data));
    } catch (error) {}
  };
}
export function vote(postId, direction) {
  return async function (dispatch) {
    try {
      await axios.post(
        `http://localhost:5000/api/posts/${postId}/vote/${direction}`
      );
      const posts = await axios.get(`http://localhost:5000/api/posts`);
      const post = await axios.get(`http://localhost:5000/api/posts/${postId}`);
      dispatch(voteReceived(posts.data, post.data));
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

export function commentAdded(post) {
  return {
    type: "ADD_COMMENT",
    post,
  };
}
export function commentDeleted(post) {
  return {
    type: "DELETE_COMMENT",
    post,
  };
}
export function voteReceived(posts, post) {
  return {
    type: "CHANGE_VOTE",
    posts,
    post,
  };
}
