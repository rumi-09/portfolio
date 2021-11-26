import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Programming Languages",
      title: "Senior Developer",
      img:
        "assets/program.png",
      icon: "assets/twitter.png",
      desc:
        "Python, SQL, MATLAB, C, C++, Java, C#",
    },
    {
      id: 2,
      name: "Databases",
      title: "Co-Founder of DELKA",
      img:
        "assets/database.png",
      icon: "assets/youtube.png",
      desc:
        "Microsoft SQL Server, MySQL, Oracle, Microsoft Access",
      //featured: true,
    },
    {
      id: 3,
      name: "Web Development",
      title: "CEO of ALBI",
      img:
        "assets/software.png",
      icon: "assets/linkedin.png",
      desc:
        "HTML, CSS, JavaScript, React",
    },
    {
      id: 4,
      name: "Others",
      title: "CEO of ALBI",
      img:
        "assets/etc.png",
      icon: "assets/linkedin.png",
      desc:
        <ul>
          <li><b>Version Control</b>: GIT, <b>Tools</b>:Pandas, Numpy, Scikit-learn, Matplotlib, Pytorch, Excel, Tablue, <b>Softwares</b>: Microsoft Visual Studio, VS Code, Android Studio, Jupytar Notebook, Spyder </li>
          {/* <li><b>Tools</b>: Pandas, Numpy, Scikit-learn, Matplotlib, Pytorch, Excel, Tablue</li> */}
          {/* <li><b>Softwares</b>: Microsoft Visual Studio, VS Code, Android Studio, Jupytar Notebook, Spyder</li> */}
        </ul>,
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Technical Skills</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              {/* <img src="assets/right-arrow.png" className="left" alt="" /> */}
                <h3>{d.name}</h3>
              {/* <img className="right" src={d.icon} alt="" /> */}
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">

              <img
                className="user"
                src={d.img}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <a href="#contact">
          <img src="assets/down.png" alt="" className="downarrow"/>
      </a>
    </div>
  );
}
