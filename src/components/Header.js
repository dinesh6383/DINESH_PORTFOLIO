import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useContext, useState } from "react";
import { Toggler } from "./Context";

function Header() {
  const { toggle, setToggle } = useContext(Toggler);
  const style = { textDecoration: "none", color: "white", display: "flex" };

  return (
    <div id="header">
      <div className="logo">
        <img src="images/dlogo.png"></img>
      </div>
      <div id="menus">
        <div className="menu">
          <Link to={"/"} style={style}>
            <Home />
            <h2>Home</h2>
          </Link>
        </div>
        <div className="menu">
          <Link to={"/about"} style={style}>
            <PersonOutlineIcon />
            <h2>About</h2>
          </Link>
        </div>
        <div className="menu">
          <Link to={"/project"} style={style}>
            <WorkOutlineIcon />
            <h2>Projects</h2>
          </Link>
        </div>
        <div className="menu">
          <Link to={"/resume"} style={style}>
            <AutoStoriesIcon />
            <h2>Resume</h2>
          </Link>
        </div>
      </div>
      <div id="burger-icon" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <CloseIcon style={{ fontSize: "2.5rem" }} />
        ) : (
          <MenuIcon style={{ fontSize: "2.5rem" }} />
        )}
      </div>
    </div>
  );
}

export default Header;
