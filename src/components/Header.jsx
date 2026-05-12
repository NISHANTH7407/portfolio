import { useState, useEffect } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const menuItems = [
    { name: "Home", link: "#home", id: "home" },
    { name: "About", link: "#about", id: "about" },
    { name: "Skills", link: "#skills", id: "skills" },
    { name: "Projects", link: "#projects", id: "projects" },
    { name: "Contact", link: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((m) => document.getElementById(m.id));
      const scrollY = window.scrollY + 120;
      sections.forEach((sec) => {
        if (sec && scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
          setActive(sec.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav>
        <a href="#home" className="nav-logo">Nishanth.</a>

        <ul className={menuOpen ? "open" : ""}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className={active === item.id ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button className="hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}

export default Header;
