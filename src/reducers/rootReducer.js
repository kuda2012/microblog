const INITIAL_STATE = { posts: [], editing: false, post: {} };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.post] };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id != action.postId),
      };
    case "GET_POST":
      return { ...state, post: action.post };
    case "GET_POSTS":
      return { ...state, posts: action.posts };
    case "EDITING_MODE":
      return { ...state, editing: !state.editing };
    case "EDIT_POST":
      return { ...state, post: action.post };
    case "RESET_POST":
      return { ...state, post: {} };
    case "ADD_COMMENT":
      return {
        ...state,
        post: action.post,
      };
    case "DELETE_COMMENT":
      return { ...state, post: action.post };
    case "CHANGE_VOTE":
      return {
        ...state,
        posts: action.posts,
        post: action.post,
      };
    default:
      return state;
  }
}

export default rootReducer;
