import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./actionType";

export const loginAction = () => {
  return { type: LOGIN_REQUEST };
};
export const loginSuccessAction = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};
export const loginFailureAction = () => {
  return { type: LOGIN_FAILURE };
};

export const logoutSuccessAction = () => {
  return { type: LOGOUT_SUCCESS };
};
