import React from "react";
import "./Portfolio.css"; // optional styling file

export default function Portfolio() {
  return (
    <div className="portfolio-container">

      {/* Hero Section */}
      <header className="hero">
        <img
          src="/images/profile.jpg"
          alt="Your main portrait"
          className="hero-image"
        />

        <h1 className="hero-title">Juris — Web Developer</h1>
        <p className="hero-description">
          I build clean, modern web applications with React, TypeScript, and Node.js.
          Passionate about UI/UX, performance, and creating meaningful digital experiences.
        </p>
      </header>

      {/* Link Cards */}
      <section className="card-grid">
        <LinkCard
          title="GitHub"
          description="My open‑source projects and contributions."
          url="https://github.com/yourname"
        />

        <LinkCard
          title="Portfolio Projects"
          description="A curated list of my best work."
          url="/projects"
        />

        <LinkCard
          title="LinkedIn"
          description="Professional profile and experience."
          url="https://linkedin.com/in/yourname"
        />

        <LinkCard
          title="Contact"
          description="Get in touch for collaboration or freelance work."
          url="/contact"
        />
      </section>
    </div>
  );
}

/* Reusable Card Component */
function LinkCard({ title, description, url }) {
  return (
    <a className="card" href={url} target="_blank" rel="noopener noreferrer">
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}
