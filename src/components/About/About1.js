import React from "react";
import Bounce from "react-reveal/Bounce";
import { Slide } from "react-reveal";

function About1() {
  return (
    <div id="about-one">
      <div className="title">
        <Bounce top>
          <h2>
            KNOW <span>WHO</span> I AM
          </h2>
        </Bounce>
      </div>
      <div className="mid-container">
        <Slide left>
          <div className="my-history">
            <p>
              Hello Everyone, I am <span>Dinesh</span> from{" "}
              <span>Tamilnadu, India</span>
            </p>
            <p>
              I completed my <span>B.E</span> in{" "}
              <span>
                Sri Shakthi Insititue of Engineering and Teachnology, Coimbatore
              </span>
            </p>
            <p>
              I am looking forward to get job as a <span>Web Developer</span> to
              gain more knowledge in this stream
            </p>
            <p>
              These are the activitites apart from studies that I love to do!
            </p>
            <ul>
              <li>
                Playing <span>Volleyball</span>
              </li>
              <li>
                Watching <span>movies</span>
              </li>
              <li>
                Watching <span>Youtube contents</span>
              </li>
            </ul>
          </div>
        </Slide>
        <Slide right>
          <div className="history-img">
            <img src="images/about.svg" alt="about"></img>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default About1;
