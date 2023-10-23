import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title"></h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.user_id === null && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.user_id && (
          <>
            <Link className="navLink" to="/games-admin">
              Games Admin
            </Link>
            <Link className="navLink" to="/rounds-admin">
              Rounds Admin
            </Link>
            {/* <Link className="navLink" to="/profile">
              Profile
            </Link>
            <Link className="navLink" to="/history">
              History
            </Link> */}
            {/* <Link className="navLink" to="/games">
              Games
            </Link> */}
            {/* <Link className="navLink" to="/3-ring">
              3-Ring
            </Link>
            <Link className="navLink" to="/4-ring">
              4-Ring
            </Link>
            <Link className="navLink" to="/5-ring">
              5-Ring
            </Link>
            <Link className="navLink" to="/trap">
              Trap
            </Link>
            <Link className="navLink" to="/quickround">
              Quick Round
            </Link> */}
            <Link className="navLink" to="/success">
              Success Page
            </Link>
            <Link className="navLink" to="/results">
              Results
            </Link>
            <Link className="navLink" to="/test">
              Test Comp
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}

        {/* <Link className="navLink" to="/about">
          About
        </Link> */}
      </div>
    </div>
  );
}

export default Nav;
