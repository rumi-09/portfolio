import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {


  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/rumi.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>About Me</h2>
          <br/>
          {/* <span>I am <b>Masuma Akter Rumi</b>, 
            working as an Application Developer in the College of Public Health 
            at the University of Iowa. I have completed my Master's from the Department 
            of Computer Science at the University of Iowa, USA. Previously, I completed my 
            bachelor's from the Department of Computer Science and Engineering at
             Chittagong University of Engineering & Technology, Bangladesh.

          </span> */}
          <span>I am <b>Masuma Akter Rumi</b>, 
          working as a Teaching Assistant in the Department of Computer Science 
          at the University of Iowa. I will be graduating with a 
          Master of Computer Science (MCS) from the University of Iowa, USA. 
          Previously, I completed my bachelor's from the Department of 
          Computer Science and Engineering at Chittagong University of 
          Engineering & Technology, Bangladesh.
          </span>
          
       
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
