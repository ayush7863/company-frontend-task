import React from "react";
import { Link, useNavigate } from "react-router-dom";
import navbarStyles from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { logoutSuccessAction } from "../Redux/auth/action";

const Navbar = () => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      // Sign out the user using Firebase
      await auth.signOut();

      // Dispatch the logout action to update Redux store
      dispatch(logoutSuccessAction());

      // Redirect to the home page or login page after logout
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <nav className={navbarStyles.navbar}>
      <div>
        <Link to="/">Web Application</Link>
      </div>
      <ul className={navbarStyles.menu_ul}>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        {isAuth && (
          <button id={navbarStyles.logout} onClick={handleLogout}>
            Logout
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
