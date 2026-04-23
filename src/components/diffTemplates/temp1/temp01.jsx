import React from "react";
import "./temp01.css";

const Temp01 = () => {
  return (
    <div className="resume">
      <div className="left">
        <div className="profileSection">
          <img
            src="https://img.freepik.com/premium-photo/corporate-boy-smiling-office-background-portrait-image_526502-4660.jpg?w=2000"
            alt="profile"
          />
        </div>

        <div className="section">
          <h3>ABOUT ME</h3>
          <p>
            Highly experienced detective with a proven track record of solving
            complex cases using innovative methods. Expert in logical reasoning
            and forensic science.
          </p>
        </div>

        <div className="section">
          <h3>LINKS</h3>
          <p>linkedin.com/sherlockholmes</p>
          <p>twitter.com/sherlockholmes</p>
        </div>

        <div className="section">
          <h3>REFERENCE</h3>
          <p>DR. JOHN WATSON</p>
          <p>+44 20 7224 3688</p>
          <p>john@bakerstreet.com</p>
        </div>

        <div className="section">
          <h3>HOBBIES</h3>
          <ul>
            <li>VIOLIN</li>
            <li>BOXING</li>
            <li>FENCING</li>
            <li>CHEMISTRY</li>
            <li>BEEKEEPING</li>
          </ul>
        </div>
      </div>

      <div className="right">
        <div className="header">
          <div>
            <h1>SHERLOCK</h1>
            <h1>HOLMES</h1>
            <p>CONSULTING DETECTIVE</p>
          </div>

          <div className="contact">
            <p>221B Baker Street, London</p>
            <p>+44 20 7224 3688</p>
            <p>sherlock@bakerstreet.com</p>
          </div>
        </div>

        <div className="block">
          <h2>WORK EXPERIENCE</h2>

          <div className="timelineItem">
            <div className="timelineLeft">
              <p>SELF-EMPLOYED</p>
              <span>London</span>
              <span>Mar 1881 - Present</span>
            </div>

            <div className="timelineRight">
              <h4>Consulting Detective</h4>
              <ul>
                <li>Solve complex criminal cases</li>
                <li>Consult Scotland Yard</li>
                <li>Develop forensic methods</li>
                <li>Maintain investigation records</li>
              </ul>
            </div>
          </div>

          <div className="timelineItem">
            <div className="timelineLeft">
              <p>UNIVERSITY OF LONDON</p>
              <span>London</span>
              <span>1878 - 1881</span>
            </div>

            <div className="timelineRight">
              <h4>Chemist</h4>
              <ul>
                <li>Conducted research</li>
                <li>Published papers</li>
                <li>Lab development</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="block">
          <h2>EDUCATION</h2>

          <div className="timelineItem">
            <div className="timelineLeft">
              <p>UNIVERSITY OF CAMBRIDGE</p>
              <span>1878</span>
            </div>

            <div className="timelineRight">
              <h4>Bachelor of Science</h4>
              <ul>
                <li>First Class Honours</li>
              </ul>
            </div>
          </div>

          <div className="timelineItem">
            <div className="timelineLeft">
              <p>ETON COLLEGE</p>
              <span>1874</span>
            </div>

            <div className="timelineRight">
              <h4>A Levels</h4>
              <ul>
                <li>Distinction</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="block">
          <h2>SKILLS</h2>

          <div className="skillsRow">
            <div className="skill">
              <p>PROBLEM SOLVING</p>
              <div className="bar">
                <div style={{ width: "90%" }} />
              </div>
            </div>

            <div className="skill">
              <p>LOGICAL REASONING</p>
              <div className="bar">
                <div style={{ width: "95%" }} />
              </div>
            </div>
          </div>

          <div className="skillsRow">
            <div className="skill">
              <p>FORENSIC ANALYSIS</p>
              <div className="bar">
                <div style={{ width: "85%" }} />
              </div>
            </div>

            <div className="skill">
              <p>OBSERVATION</p>
              <div className="bar">
                <div style={{ width: "90%" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="block">
          <h2>LANGUAGES</h2>

          <div className="skillsRow">
            <div className="skill">
              <p>ENGLISH</p>
              <div className="bar">
                <div style={{ width: "95%" }} />
              </div>
            </div>

            <div className="skill">
              <p>FRENCH</p>
              <div className="bar">
                <div style={{ width: "75%" }} />
              </div>
            </div>
          </div>

          <div className="skillsRow">
            <div className="skill">
              <p>GERMAN</p>
              <div className="bar">
                <div style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp01;
