import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
// import {
//   featuredPortfolio,
//   webPortfolio,
//   mobilePortfolio,
//   designPortfolio,
//   contentPortfolio,
// } from "../../data";

export default function Portfolio() {
 



  return (
    <div className="portfolio" id="portfolio">
      <h1>Experiences</h1>
      <br/>
      <br/>
  
      <div id = "leftbox" className="maindiv">
                <h2>Application Developer </h2>
                <h3>
                  [2022 - Present]<br/>
                  College of Public Health<br/>
                  The University of Iowa
                </h3>
               
      </div> 
              
      <div id = "middlebox">
                <h2>Graduate Research & Teaching Assistant</h2>
                <h3>
                  [2018 - 2021]<br/>
                  Department of Computer Science<br/>
                  The University of Iowa, USA
                </h3>
                
      </div>
      <div id = "rightbox">
                <h2>Teaching Instructor</h2>
                <h3>
                  [2015 - 2018]<br/>
                  Department of Computer Science<br/>
                  BRAC University & UITS, Bangladesh
                </h3>

       
      </div>

      <a href="#works">
          <img src="assets/down.png" alt="" className="arrow"/>
      </a>

    </div>
  );
}
