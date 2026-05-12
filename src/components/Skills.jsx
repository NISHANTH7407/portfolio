function Skills() {
  const skills = [
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 82 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Node.js", level: 65 },
    { name: "REST APIs", level: 78 },
    { name: "Git & GitHub", level: 80 },
    { name: "JWT Authentication", level: 70 },
  ];

  return (
    <section id="skills">
      <h2 className="section-title">My Skills</h2>
      <p className="section-subtitle">Technologies I work with</p>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
