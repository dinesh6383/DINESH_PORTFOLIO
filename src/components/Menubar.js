import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Home } from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Toggler } from "./Context";

function Menubar() {
  const { toggle, setToggle } = useContext(Toggler);
  const style = { textDecoration: "none", color: "white", display: "flex" };

  return (
    <div id="home-one">
      <div
        id="nav-menus"
        style={{ transform: toggle ? "translateX(0)" : "translateX(-100%)" }}
      >
        <div className="home-menu">
          <Link style={style} to={"/"} onClick={() => setToggle(false)}>
            <Home />
            <h2>Home</h2>
          </Link>
        </div>
        <div className="home-menu">
          <Link style={style} to={"/about"} onClick={() => setToggle(false)}>
            <PersonOutlineIcon />
            <h2>About</h2>
          </Link>
        </div>
        <div className="home-menu">
          <Link style={style} to={"/project"} onClick={() => setToggle(false)}>
            <WorkOutlineIcon />
            <h2>Projects</h2>
          </Link>
        </div>
        <div className="home-menu">
          <Link style={style} to={"/resume"} onClick={() => setToggle(false)}>
            <AutoStoriesIcon />
            <h2>Resume</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menubar;
