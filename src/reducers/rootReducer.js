const INITIAL_STATE = { posts: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_POST":
      return { ...state.posts, posts: [...state.posts, action.payload] };
    case "DELETE_POST":
      let posts = state.posts.filter((post) => post.id != action.payload);
      return {
        ...state.posts,
        posts: posts.map((post, i) => {
          post.id = i;
          return post;
        }),
      };
    default:
      return state;
  }
}

export default rootReducer;
