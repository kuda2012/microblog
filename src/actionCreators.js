import axios from "axios";
export function getPostsFromApi() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("http://localhost:5000/api/posts");
      dispatch(gotPosts(data));
    } catch (error) {}
  };
}
export function gotPosts(posts) {
  return {
    type: "GET_POSTS",
    posts,
  };
}
