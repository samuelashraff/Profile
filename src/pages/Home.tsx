import { useEffect, useState } from "react";
import "../styles/base.css";
import photo from "../assets/CV_Photo_2.png";
import Skills from "../components/Skills";
import About from "../components/About";
import Links from "../components/Links";
import Certifications from "../components/Certifications";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  })

  return (
    <div className={`main-container centered page-enter ${visible ? "visible" : ""}`}>
        <div className="home-header">
            <img src={photo} alt="Samuel Ashraff" style={{width: 140, height: 140, borderRadius: "50%", objectFit: "cover"}}/>
            <h1>Hi! I'm Samuel Ashraff</h1>
        </div>
        <h2>Full-Stack Developer with over 4 years of experience</h2>
        <section className="about-me-section stagger">
            <About />
        </section>
        <div className="skills-layout stagger stagger-late">
            <Skills />
        </div>
        <section className="certificates-section stagger stagger-late">
            <Certifications/>
        </section>
        <div className="stagger stagger-last">
          <Links />
        </div>
    </div>
  );
}
