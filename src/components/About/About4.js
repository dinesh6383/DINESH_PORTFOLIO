import React, { useState } from "react";
import { SiVisualstudiocode, SiNetlify, SiGithub } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import Tada from "react-reveal/Tada";
import Bounce from "react-reveal/Bounce";
import RubberBand from "react-reveal/RubberBand";

function About4() {
  const languages = [
    { name: <SiVisualstudiocode />, time: 0 },
    { name: <SiNetlify />, time: 300 },
    { name: <SiGithub />, time: 600 },
  ];

  const [wobble, setWobble] = useState(-1);
  console.log(wobble);
  return (
    <div id="web-skill">
      <div className="web-title">
        <RubberBand>
          <h2>
            <span>Tools</span> I use
          </h2>
        </RubberBand>
      </div>
      <div className="lang-img" id="tools">
        {languages.map((lang, index) => {
          return (
            <Tada when={wobble == index ? true : false}>
              <Bounce left delay={lang.time}>
                <div
                  key={index}
                  id={index}
                  className="lang-name"
                  style={{ fontSize: "100px" }}
                  onMouseEnter={() => setWobble(index)}
                  onMouseLeave={() => setWobble(-1)}
                >
                  {lang.name}
                </div>
              </Bounce>
            </Tada>
          );
        })}
      </div>
    </div>
  );
}

export default About4;
