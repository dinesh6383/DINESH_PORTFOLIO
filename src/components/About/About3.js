import React, { useState } from "react";
import { DiJavascript1, DiReact, DiHtml5, DiBootstrap } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import Tada from "react-reveal/Tada";
import Bounce from "react-reveal/Bounce";
import RubberBand from "react-reveal/RubberBand";

function About3() {
  const languages = [
    { name: <DiHtml5 />, time: 0 },
    { name: <FaCss3Alt />, time: 300 },
    { name: <DiJavascript1 />, time: 600 },
    { name: <DiReact />, time: 900 },
    { name: <DiBootstrap />, time: 1200 },
  ];

  const [wobble, setWobble] = useState(-1);
  console.log(wobble);
  return (
    <div id="web-skill">
      <div className="web-title">
        <RubberBand>
          <h2>Web Development</h2>
        </RubberBand>
      </div>
      <div className="lang-img">
        {languages.map((lang, index) => {
          return (
            <Tada key={index} when={wobble == index ? true : false}>
              <Bounce left delay={lang.time}>
                <div
                  id={index}
                  className="lang-name"
                  style={{ fontSize: "110px" }}
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

export default About3;
