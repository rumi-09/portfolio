import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src="assets/toplogo.png" alt="" />
          </a>

           <div className="itemContainer">
            {/* <Person className="icon" /> */}
            <span>          
              <a href="https://www.linkedin.com/in/masuma-akter-rumi-10a382102/" 
                  target="_blank" className="linkedin">
                  <img src="assets/linkedin.png" alt="" />
              </a>
            </span>
          </div> 
          <div className="itemContainer">
            <Mail className="icon" />
            <span>masumaDOTrumiATyahooDOTcom</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
