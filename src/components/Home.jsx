import { useState, useEffect } from "react";

const roles = ["Frontend Developer", "React Enthusiast", "UI/UX Thinker", "Problem Solver"];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home">
      <div className="hero fade-in-up">
        <div className="hero-badge">👋 Available for opportunities</div>

        <h1>
          Hi, I'm <span className="highlight">Nishanth</span>
          <br />
          <span className="highlight">{displayed}</span>
          <span style={{ borderRight: "2px solid #6366f1", marginLeft: "2px", animation: "none" }}>|</span>
        </h1>

        <p className="subtitle">
          Passionate about building modern, responsive web applications with clean code and intuitive design.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View My Work →</a>
          <a href="#contact" className="btn-outline">Get In Touch</a>
        </div>

        <div className="hero-social">
          <a href="https://github.com/nishanth7407" target="_blank" rel="noopener noreferrer" title="GitHub">
            GH
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            in
          </a>
          <a href="mailto:nishanth@example.com" title="Email">
            ✉
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
