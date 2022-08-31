import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import Pulse from "react-reveal/Pulse";
import RubberBand from "react-reveal/RubberBand";
import ProjectData from "./ProjectData";

function Project1() {
  return (
    <div id="project-one">
      <div className="projects">
        <div className="proj-title">
          <RubberBand>
            <h2>
              My Recent <span>Projects</span>
            </h2>
            <p>Here are few projects I've worked recently</p>
          </RubberBand>
        </div>
        <div className="proj-names">
          {ProjectData.map((data, index) => {
            return (
              <Pulse delay={data.delay}>
                <div className={data.projectClass} key={index}>
                  <div className="proj-image"></div>
                  <div className="proj-explain">
                    <div className="head-title">
                      <h3>{data.name}</h3>
                    </div>
                    <div className="explanation">
                      <p>{data.explanation}</p>
                    </div>
                  </div>
                  <div className="lang-used">
                    <div className="lang-known">
                      <h3>Language used.</h3>
                    </div>
                    <div className="langs">
                      <div className="html">
                        <div className="indicator">
                          <p>Html</p>
                          <p>{data.htmlPercent}</p>
                        </div>
                        <div className="ranger">
                          <div
                            className="range"
                            style={{ width: data.htmlPercent }}
                          ></div>
                        </div>
                      </div>
                      <div className="css">
                        <div className="indicator">
                          <p>Css</p>
                          <p>{data.cssPercent}</p>
                        </div>
                        <div className="ranger">
                          <div
                            className="range"
                            style={{ width: data.cssPercent }}
                          ></div>
                        </div>
                      </div>
                      <div className="javascript">
                        <div className="indicator">
                          <p>Javascript</p>
                          <p>{data.jsPercent}</p>
                        </div>
                        <div className="ranger">
                          <div
                            className="range"
                            style={{ width: data.jsPercent }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="visit-btn">
                      <a href={data.projectLink}>
                        <button>
                          <BiLinkExternal />
                          View project
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Pulse>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project1;
