import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Posts from "../Pages/Posts";
import SinglePost from "../Pages/SinglePost";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/posts"
        element={
          <PrivateRoute>
            <Posts />{" "}
          </PrivateRoute>
        }
      />
      <Route
        path="/posts/:postID"
        element={
          <PrivateRoute>
            <SinglePost />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AllRoutes;
