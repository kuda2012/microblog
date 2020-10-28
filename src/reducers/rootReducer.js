const INITIAL_STATE = { posts: [], editing: false };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.payload] };
    case "DELETE_POST":
      let deletePosts = state.posts.filter((post) => post.id != action.payload);
      return {
        ...state,
        posts: deletePosts.map((post, i) => {
          post.id = i;
          return post;
        }),
      };
    case "EDITING_MODE":
      return { ...state, editing: !state.editing };
    case "EDIT_POST":
      let editPosts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          post = action.payload;
        }
        return post;
      });
      return { ...state, posts: editPosts };
    case "ADD_COMMENT":
      let addPostComment = state.posts.map((post) => {
        if (post.id === action.postId) {
          post.comments.push(action.payload);
        }
        return post;
      });
      return { ...state, posts: addPostComment };
    case "DELETE_COMMENT":
      let deletePostComment = state.posts.map((post) => {
        if (post.id == action.postId) {
          if (action.payload.id === post.comments.length - 1) {
            console.log("hi");
            post.comments = post.comments.slice(0, action.payload.id);
          } else {
            post.comments = [
              ...post.comments.slice(0, action.payload.id),
              ...post.comments.slice(action.payload.id + 1),
            ];
          }
          post.comments = post.comments.map((comment, i) => {
            action.payload.id = i;
            return comment;
          });
        }
        return post;
      });
      return { ...state, posts: deletePostComment };
    default:
      return state;
  }
}

export default rootReducer;
