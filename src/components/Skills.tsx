import "../styles/base.css";

export default function Skills() {
  const skills = [
    "Java",
    "React.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "SQL",
    "Node.js",
    "Docker",
    "GraphQL",
    "Redis",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "GitHub Actions",
    "Jenkins",
    "AWS",
    "GCP",
    "Spring Boot",
    "Next.js",
    "Linux",
    "Agile Methodologies",
    "SPARQL",
  ];
  return (
    <section className="skills-section">
      <h3>Skills</h3>
      <div className="skills-pills">
        {skills.map((skill) => (
          <span className="skill-pill" key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}