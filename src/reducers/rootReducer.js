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
        if (post.id === action.postId) {
          post.comments = post.comments.filter(
            (comment) => comment.id !== action.payload.id
          );
          post.comments = post.comments.map((comment, i) => {
            comment.id = i;
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
