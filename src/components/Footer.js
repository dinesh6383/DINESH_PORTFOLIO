import React from "react";
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div id="foot-container">
      <div>
        <p>
          Developed by <span>DINESH R</span>
        </p>
      </div>
      <div>
        <p>Copyright © {year} </p>
      </div>
      <div className="foot-icons">
        <a href="https://github.com/dinesh6383">
          <div>
            <GitHub />
          </div>
        </a>
        <a href="https://twitter.com/DineshR95047151">
          <div>
            <Twitter />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/dinesh-ravi-4b3005216/">
          <div>
            <LinkedIn />
          </div>
        </a>
        <a href="https://www.instagram.com/_.dinesh.__/">
          <div>
            <Instagram />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Footer;
