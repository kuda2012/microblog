const INITIAL_STATE = { posts: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_POST":
      return { ...state.posts, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
}

export default rootReducer;
