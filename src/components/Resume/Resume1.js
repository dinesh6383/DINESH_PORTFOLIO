import React from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Flip from "react-reveal/Flip";

function Resume1() {
  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1toi0ZXh70LDglh4bt9oQoDka4-WbYR1h/view?usp=sharing"
    );
  };
  return (
    <div id="resume-one">
      <div className="resume-holder">
        <div className="button-one">
          <button onClick={handleResume}>
            <FileDownloadOutlinedIcon /> Resume
          </button>
        </div>
        <div className="resume">
          <Flip left>
            <div className="extra-activities">
              <div className="extra-title">
                <h2>Extra-carricular activities</h2>
              </div>
              <div className="athlete">
                <h3>Athletics</h3>
              </div>
              <div className="running">
                <p>
                  I have attended district level 100m junior sport meet in
                  Tirunelveli.
                </p>
                <p>
                  We won Second Price in 4x100m relay in junior level sport
                  meet.
                </p>
              </div>
              <div className="athlete">
                <h3>Volley Ball</h3>
              </div>
              <div className="running">
                <p>
                  I have attended college level tournament in Volley Ball which
                  is a senior level tournament.
                </p>
                <p>I have played district level matches in Coimbatore.</p>
              </div>
            </div>
          </Flip>
          <Flip left>
            <div className="experience">
              <div className="experience-title">
                <h2>Experience</h2>
              </div>
              <div className="work">
                <div className="work-role">
                  <h3>QA Engineer</h3>
                </div>
                <div className="my-work">
                  <p>
                    I am a <span>Fresher</span>. Currently I am working as a
                    <span>Quality assurance Engineer</span>.
                  </p>
                  <p>
                    But as a<span>developer</span>I don't have any prior
                    experience.
                  </p>
                  <p>
                    I am <span>learning</span>and upgrading my skills day by
                    day.
                  </p>
                  <p>I am keen to work as a Developer.</p>
                </div>
              </div>
            </div>
          </Flip>
          <Flip left>
            <div className="education">
              <div className="education-title">
                <h2>Education</h2>
              </div>
              <div className="college">
                <div className="college-name">
                  <h3>Sri Shakthi Institute of Engineering and Technology</h3>
                </div>
                <div className="clg-mark">
                  <p>
                    <span>CGPA</span> : 7.64
                  </p>
                  <p>(2018-2022)</p>
                </div>
              </div>
              <div className="higher-secondary">
                <div className="hr-name">
                  <h3>
                    Sri Jayendra Saraswathi swamigal Golden Jubliee School
                  </h3>
                </div>
                <div className="clg-mark">
                  <p>
                    <span>Percentage</span> : 82%
                  </p>
                  <p>(2017-2018)</p>
                </div>
              </div>
              <div className="lower-secondary">
                <div className="low-name">
                  <h3>Little flower Model School</h3>
                </div>
                <div className="clg-mark">
                  <p>
                    <span>Percentage</span> : 93%
                  </p>
                  <p>(2016-2017)</p>
                </div>
              </div>
            </div>
          </Flip>
        </div>
        <div className="button-two">
          <button onClick={handleResume}>
            <FileDownloadOutlinedIcon /> Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume1;
