import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="section-subtitle">Let's work together</p>

      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            Open to collaborations, freelance projects, or just a friendly chat about tech. I'll get back to you as soon as possible.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-item-icon">✉</div>
              <a href="mailto:nishanth@example.com">nishanth@example.com</a>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <span>India</span>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">GH</div>
              <a href="https://github.com/nishanth7407" target="_blank" rel="noopener noreferrer">
                github.com/nishanth7407
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">{submitted ? "✓ Message Sent!" : "Send Message"}</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
