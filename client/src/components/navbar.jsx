import React from "react";
import { Link } from "react-router-dom";
import { Nav, Li, NavBtn } from "../styles/navbar.style";

const Navbar = (props) => {
  const { user, logOut } = props;
  return (
    <Nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        <img src="../logo.png" alt="logo" />
      </Link>
      <ul>
        <Li>
          <Link
            to="/discover"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Discover
          </Link>
        </Li>
      </ul>
      {user ? (
        <>
          <Link
            to="/dashboard"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Dashboard
          </Link>
          <NavBtn onClick={logOut}>Logout</NavBtn>
        </>
      ) : (
        <>
          <NavBtn>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              Login
            </Link>
          </NavBtn>
          <NavBtn>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "black" }}
            >
              Sign Up
            </Link>
          </NavBtn>
        </>
      )}
    </Nav>
  );
};

export default Navbar;
