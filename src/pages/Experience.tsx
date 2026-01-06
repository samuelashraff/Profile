import { useEffect, useState } from "react";
import "../styles/base.css";
import "../styles/experience.css";
import Links from "../components/Links";

export default function Experience() {
  const [expanded, setExpanded] = useState([false, false, false]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  });

  const experiences = [
    {
      title: "Software Developer",
      company: "Profium Oy",
      dates: "Sep 2021 – Apr 2025",
      content: [
        "Progressed from a part-time trainee role to full-time full-stack developer, \
        delivering full-stack features with Java (Spring), React, and Jenkins CI/CD pipelines \
        in an Agile and Test-Driven Development Environment.",
        "Served as the main technical contact for several customer projects in a high-ownership role, \
        delivering several end-to-end features and ensuring prompt resolution of reported issues.",
        "Completed master’s thesis in collaboration with the company, \
        researching state-of-the-art Automatic Speech Recognition (ASR)\
        technologies and their practical applications using OpenAI’s Whisper, Assembly AI, and Vosk, as well as AWS.",
        "Performed customer data migration from external systems.",
        "Spearheaded development of automated testing using Robot Framework and JUnit resulting in reduced manual testing.",
      ]
    },
    {
      title: "Software Engineer Trainee",
      company: "IOXIO",
      dates: "Jun 2021 - Sep 2021",
      content: [
        "Delivered a data definition view tool built with Next.js and Python in an Agile Development Environment."
      ]
    },
    {
      title: "Software Engineer Trainee",
      company: "IOXIO",
      dates: "Jun 2020 - Aug 2020",
      content:[
          "Helped deliver a real-time prototype API interface for the Finnish Tax Administration using FastAPI, \
          Firestore, and the OpenAI Swagger Standard.",
          "Worked with Azure CI/CD pipelines for automated testing and deployment."
      ]
    },
  ];

  const toggle = (idx: number) => {
    setExpanded((e) =>
      e.map((v, i) => (i === idx ? !v : v))
    );
  }

  return (
    <div className={`main-container centered page-enter ${visible ? "visible" : ""}`}>
        <h1>Experience</h1>
        <div className="experience-cards">
        {experiences.map((exp, idx) => (
            <div className="experience-card" key={exp.title + exp.company}>
            <div className="experience-title">{exp.title}</div>
            <div className="experience-meta">
              <div className="experience-company">{exp.company}</div>
              <div className="experience-dates">{exp.dates}</div>
            </div>
            <div
              className={`experience-content ${
                idx === 0 ? "collapsible" : ""
              }${expanded[idx] ? " expanded" : ""}`}
            >
                <ul>
                  {Array.isArray(exp.content)
                      ? exp.content.map((item, i) => <li key={i}>{item}</li>)
                      : <li>{exp.content}</li>
                  }
                </ul>
            </div>
            {idx === 0 && (
              <button
                className="experience-toggle"
                onClick={() => toggle(idx)}
              >
                {expanded[idx] ? "Show less" : "Show more"}
              </button>
            )}
            </div>
        ))}
        </div>
        <div className="stagger">
          <Links />
        </div>
    </div>
  );
}
