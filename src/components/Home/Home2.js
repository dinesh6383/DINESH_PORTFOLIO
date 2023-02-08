import React from "react";
import { Slide } from "react-reveal";
import Typewriter from "typewriter-effect";
function Home2() {
  return (
    <div id="home-two">
      <div className="top-container">
        <Slide left>
          <div className="intro-msg">
            <div>
              <h1>
                Hi, There! <span className="wave-hand">👋</span>
              </h1>
              <h1>
                I'm <span className="name">DINESH</span>
              </h1>
            </div>
            <div className="animation">
              <Typewriter
                options={{
                  loop: true,
                  autoStart: true,
                  cursor: "|",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("MERN Developer")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Welcome's You")
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
              />
            </div>
          </div>
        </Slide>
        <div className="intro-img">
          <img src="images/home-main.svg" alt="home"></img>
        </div>
      </div>
    </div>
  );
}

export default Home2;
