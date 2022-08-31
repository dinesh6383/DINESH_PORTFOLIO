import React, { useState } from "react";
import { DiJavascript1 } from "react-icons/di";
import Tada from "react-reveal/Tada";
import Bounce from "react-reveal/Bounce";
import RubberBand from "react-reveal/RubberBand";

function About2() {
  const [hover, setHover] = useState(false);
  console.log(hover);
  return (
    <div id="skill-set">
      <div className="skill-title">
        <RubberBand>
          <h2>Professional skills</h2>
        </RubberBand>
      </div>
      <div className="language">
        <div className="lang-title">
          <RubberBand>
            <h2>Language</h2>
          </RubberBand>
        </div>
        <div className="lang-img">
          <Bounce left>
            <Tada when={hover ? true : false}>
              <div
                className="lang-name"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <DiJavascript1 style={{ fontSize: "110px" }} />
              </div>
            </Tada>
          </Bounce>
        </div>
      </div>
    </div>
  );
}

export default About2;
