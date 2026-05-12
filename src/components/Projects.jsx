function Projects() {
  const projects = [
    {
      icon: "⚡",
      title: "React Web App",
      description: "A modern full-stack web application built with React and Node.js featuring real-time updates and a clean dashboard UI.",
      tags: ["React", "Node.js", "REST API"],
      github: "https://github.com/nishanth7407/project1",
      live: null,
    },
    {
      icon: "🎨",
      title: "Portfolio Website",
      description: "Responsive personal portfolio website built with HTML, CSS, and JavaScript showcasing projects and skills.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/nishanth7407/project2",
      live: null,
    },
    {
      icon: "🛒",
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with product listings, cart management, and secure JWT-based authentication.",
      tags: ["React", "JWT", "Node.js", "MongoDB"],
      github: "https://github.com/nishanth7407/project3",
      live: null,
    },
  ];

  return (
    <section id="projects">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">Things I've built</p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-top">
              <span className="project-icon">{project.icon}</span>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                  GH
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Demo">
                    ↗
                  </a>
                )}
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
