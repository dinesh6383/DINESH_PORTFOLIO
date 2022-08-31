import { GitHub, LinkedIn, Twitter, Instagram } from "@mui/icons-material";
import React from "react";
import { Slide } from "react-reveal";
import RubberBand from "react-reveal/RubberBand";

function Home3() {
  return (
    <div id="home-three">
      <RubberBand>
        <div className="title">
          <h2>
            LET ME <span className="introduce-word">INTRODUCE</span> MYSELF
          </h2>
        </div>
      </RubberBand>
      <div className="mid-container">
        <Slide left>
          <div className="myself">
            <p>
              <img src="images/point.png" alt="point-img"></img>I'm a person who
              is eager to
              <span>learn new things</span>
            </p>
            <p>
              <img src="images/point.png" alt="point1-img"></img>I am fluent in{" "}
              <span>Javascript </span>
              language
            </p>
            <p>
              <img src="images/point.png" alt="point2-img"></img>My area of
              intrest revolves around being a <span>web developer</span>
            </p>
            <p>
              <img src="images/point.png" alt="point3-img"></img>My hobby is{" "}
              <span>playing Volleyball </span>
              and <span>watching movies</span>
            </p>
            <p>
              <img src="images/point.png" alt="point4-img"></img>
              In my leisure time I try to solve <span>DSA problems </span>in
              Geeks for Geeks
            </p>
            <p>
              <img src="images/point.png" alt="point5-img"></img>
              <span>FUN FACT</span> : I am a huge fan of Procastination😝{" "}
            </p>
          </div>
        </Slide>
        <Slide right>
          <div className="myself-img">
            <img src="images/avatar.svg" alt="point6-img"></img>
          </div>
        </Slide>
      </div>
      <div className="find-me">
        <h2>FIND ME ON</h2>
        <p>
          Feel free to <span>connect</span> with
        </p>
        <div className="icons">
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
    </div>
  );
}

export default Home3;
