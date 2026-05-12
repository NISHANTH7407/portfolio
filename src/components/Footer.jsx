function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/nishanth7407" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/your-linkedin-username" },
    { name: "Email", url: "mailto:nishanth@example.com" },
  ];

  return (
    <footer>
      <div className="footer-inner">
        <span className="nav-logo">Nishanth.</span>
        <ul>
          {socialLinks.map((item, index) => (
            <li key={index}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <p>© {year} Nishanth. Crafted with ❤️ using React.</p>
      </div>
    </footer>
  );
}

export default Footer;
