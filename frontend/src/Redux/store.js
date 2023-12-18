import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as postReducer } from "./posts/reducer";
import { reducer as authReducer } from "./auth/reducer";
import { thunk } from "redux-thunk";

const root = combineReducers({
  authReducer,
  postReducer,
});

export const store = legacy_createStore(root, applyMiddleware(thunk));
