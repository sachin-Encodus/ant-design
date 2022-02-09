import React from "react";
import { Button } from "antd";
const Navbar = ({ screens }) => {
  return (
    <nav className="navbar">
      <div className="nav-item">
        <h1
          style={{
            color: "#023047",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            marginLeft: 30,
          }}
        >
          ATools<span style={{ color: "red" }}>.</span>
        </h1>
        <div style={{ display: screens.md ? "flex" : "none" }}>
          <Button
            style={{
              backgroundColor: "#023047",
              color: "#fff",
              fontFamily: "sans-serif",
            }}
            className="nav-button"
          >
            Start Free Trial
          </Button>
          <Button
            style={{
              backgroundColor: "#ee8f00",
              color: "#fff",
              fontFamily: "sans-serif",
            }}
            className="nav-button"
          >
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
