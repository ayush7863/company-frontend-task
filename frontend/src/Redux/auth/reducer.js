import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./actionType";

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isAuth: true, isLoading: false, token: payload };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case LOGOUT_SUCCESS:
      return { ...state, isAuth: false };

    default:
      return state;
  }
};
