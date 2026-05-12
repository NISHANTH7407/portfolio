import aboutData from "../content/AboutContent";

function About() {
  const stats = [
    { number: "10+", label: "Projects Built" },
    { number: "3+", label: "Years Learning" },
    { number: "5+", label: "Technologies" },
    { number: "100%", label: "Dedication" },
  ];

  return (
    <section id="about">
      <h2 className="section-title">{aboutData.title}</h2>
      <p className="section-subtitle">A little bit about who I am</p>

      <div className="about-grid">
        <div className="about-text">
          <p>{aboutData.description.trim()}</p>
          <ul className="about-highlights">
            {aboutData.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="about-stats">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
