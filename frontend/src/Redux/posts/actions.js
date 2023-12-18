import axios from "axios";
import {
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from "./actionTypes";

export const getPostRequest = () => {
  return { type: GET_POSTS_REQUEST };
};

export const getPostSuccess = (payload) => {  
  return { type: GET_POSTS_SUCCESS, payload };
};

export const getPostFailure = () => {
  return { type: GET_POSTS_FAILURE };
};


export const getData = (dispatch) => {
    dispatch(getPostRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch(getPostSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getPostFailure());
      });
  };