import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Accessible Running Track",
      desc:
      
        <ul>
          <li>This is a smartphone application to give people with visual impairments feedback on running track.</li>
          <li>While a person walks, the app takes images of the track, processes them and determines the angle of the person.</li>
          <li>Finally, it provides verbal feedback if the person is veering from the track.</li>
          <li>The application was built upon an existing app using C# and OpenCV.</li>
        </ul>,
        
      img1: "./assets/csharp.png",
      img2: "./assets/opencv.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "GCN Distributed Training",
      desc:           
        <ul>
          <li>The system trains Graph Convolutional Network (GCN) in multiple GPUs.</li>
          <li>To maintain the accuracy, the system performs communication efficient sampling.</li>
          <li>The system was evaluated with multiple datasets such as Reddit, Amazon, Ppi etc.</li>
          <li>The system was implemented with Pytorch and Python.</li>
        </ul>,
      img1: "./assets/pytorch.png",
      img2: "./assets/python.png",
      
  
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

   
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    
    <div className="works" id="works">
      {/* <h1>Projects</h1> */}
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  {/* <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div> */}
                  <h3>{d.title}</h3>
                  <span>{d.desc}</span>
                  
                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">
                {/* <h2>Technology Used</h2> */}
                <br/>
                <img src={d.img1} alt="" />
                <img src={d.img2} alt="" />
                
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/right-arrow-icon.jpg"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/right-arrow-icon.jpg"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
