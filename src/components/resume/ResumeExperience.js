import React from "react";
import { exp1, exp2, exp3, exp4 } from "../../data/resume.js";
import { CodeSVG, HashSVG } from "../Svg/SvgIcons.js";

import "../../style/resume.css";

function ResumeSkills() {
  return (
    <div className="row intro-body">
      <div className="row intro-header">
        <div className="col-lg-1 start ">
          <CodeSVG />
        </div>
        <div className="col-lg-11 main-text">
          <h4>Work Experience & Projects</h4>
        </div>
        <hr />
      </div>
      {}
      <div className="col-lg-6 intro-text">
        <h5>{exp1.name}</h5>
        <div className="works-time my-list mt-4">
          <ul className="ul-list">
            <li>
              
              <a href={exp1.live} target="_blank">
                anaskhonprime.web.app/
              </a>
            </li>
            <li>
              Github :
              <a href={exp1.code} target="_blank">
                github.com/Netra05
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6 my-list">
        <div className="activity-container">
          <div className="works-intro">
            <HashSVG />
            <p></p>
          </div>
          <ul>
            <div className="list">
              <li>{exp1.content}</li>
            </div>
          </ul>
        </div>
        <div className="activity-container">
          <div className="works-intro">
            <HashSVG />
            <p></p>
          </div>
          <ul>
            <div className="list">
              <li>{exp1.stack}</li>
              <li>{exp1.stack1}</li>
            </div>
          </ul>
        </div>
        <div className="activity-container">
          <div className="works-intro">
            <HashSVG />
            <p></p>
          </div>
          <ul>
            <div className="list">
              <li>{exp1.special}</li>
            </div>
          </ul>
        </div>
      </div>
      <hr className="my-5" />
      {}
      <div className="col-lg-6  intro-text">
        <h5>{exp2.name}</h5>
        <div className="works-time my-list mt-4">
          <ul className="ul-list">
            <li>
              
              <a href={exp2.live} target="_blank">
                Vue Portfolio
              </a>
            </li>
            <li>
              Github :
              <a href={exp2.code} target="_blank">
                Vuejs-tailwind-portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6 my-list">
        <div className="activity-container">
          <div className="works-intro">
            <HashSVG />
            <p></p>
          </div>
          <ul>
            <div className="list">
              <li>{exp2.content}</li>
            </div>
          </ul>
        </div>
        <div className="activity-container">
          <div className="works-intro">
            <HashSVG />
            <p></p>
          </div>
          <ul>
            <div className="list">
              <li>{exp2.stack}</li>
              <li>{exp2.stack1}</li>
            </div>
          </ul>
        </div>
        <div className="activity-container">
          <div className="works-intro">
            <HashSVG />
            <p></p>
          </div>
          <ul>
            <div className="list">
              <li>{exp2.special}</li>
            </div>
          </ul>
        </div>
      </div>
      <hr className="my-5" />
      {}
      <div className="col-lg-6  intro-text">
        <h5>{exp3.name}</h5>
        <div className="works-time my-list mt-4">
          <ul className="ul-list">
            <li>
              <a href={exp3.live} target="_blank">
                reactprime505.web.app/
              </a>
            </li>
            <li>
              Github :
              <a href={exp3.code} target="_blank">
                react-eth-mint-dapp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6 my-list">
        <div className="activity-container">
          <div className="works-intro">
            <HashSVG />
            <p></p>
          </div>
          <ul>
            <div className="list">
              <li>{exp3.content}</li>
            </div>
          </ul>
        </div>
        <div className="activity-container">
          <div className="works-intro">
            <HashSVG />
            <p></p>
          </div>
          <ul>
            <div className="list">
              <li>{exp3.stack}</li>
              <li>{exp3.stack1}</li>
            </div>
          </ul>
        </div>
        <div className="activity-container">
          <div className="works-intro ">
            <HashSVG />
            <p></p>
          </div>
          <ul>
            <div className="list">
              <li>{exp3.special}</li>
            </div>
          </ul>
        </div>
      </div>
      <hr className="my-5" />
      {}
      <div className="col-lg-6  intro-text">
        <h5>{exp4.name}</h5>
        <div className="works-time my-list mt-4">
          <ul className="ul-list">
            <li>
              <a href={exp4.live1} target="_blank">
                International Day
              </a>
            </li>
            <li>
              <a href={exp4.live2} target="_blank">
              </a>
            </li>
            <li>
              <a href={exp4.live3} target="_blank">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6 my-list">
        <div className="activity-container">
          <div className="works-intro">
            <HashSVG />
            <p></p>
          </div>
          <ul>
            <div className="list">
              <li>{exp4.content}</li>
              <li>{exp4.stack}</li>
            </div>
          </ul>
        </div>
        <div className="activity-container">
          <div className="works-intro ">
            <HashSVG />
            <p></p>
          </div>
          <ul>
            <div className="list">
              <li>{exp4.special}</li>
            </div>
          </ul>
        </div>
      </div>
      {}
    </div>
  );
}

export default ResumeSkills;
