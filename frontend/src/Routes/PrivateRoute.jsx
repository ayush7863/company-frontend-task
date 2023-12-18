import React from "react";
import Login from "../Pages/Login";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
//   const token=useSelector((store) => store.authReducer.token);
  


  return <>{isAuth ? children : <Login />}</>;
};

export default PrivateRoute;
