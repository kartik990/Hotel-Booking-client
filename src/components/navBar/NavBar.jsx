import "./navBar.css";
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link
          to="/"
          style={{
            color: "inherit",
            textDecoration: "none",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          <span className="logo"> BookingApp </span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <Link to="/login">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
