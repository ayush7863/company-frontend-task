import {
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  posts: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS_REQUEST:
      return { ...state, isLoading: true };
    case GET_POSTS_SUCCESS:
      return { ...state, isLoading: false, posts: payload };
    case GET_POSTS_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
