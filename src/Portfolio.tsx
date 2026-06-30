import "./Portfolio.css";
import profileImage from "./assets/ieva.webp";

type LinkCardProps = {
  title: string;
  description: string;
  url: string;
};

export default function Portfolio() {
  return (
    <div className="portfolio-container">

      {/* Hero Section */}
      <header className="hero">
        <img
          src={profileImage}
          alt="Ieva Lukstiņa"
          className="hero-image"
        />

        <h1 className="hero-title">Ieva Lukstiņa</h1>
        <h2 className="hero-subtitle">Freelance translator</h2>
        <p className="hero-description">
          Professional freelance translator specializing in German → Latvian,
          English → Latvian, and Latvian → German. I deliver accurate, culturally
          aware translations for agencies, businesses, and private clients.
        </p>
      </header>

      {/* Link Cards */}

      <section className="card-grid">

        {/* Places to hire you */}
        <LinkCard
          title="Hire Me on Interpreters.travel"
          description="My freelance translator profile on Interpreters.travel."
          url="https://www.interpreters.travel/en/riga/772858/interpreter/28506"
        />

        <LinkCard
          title="Find me on LinkedIn"
          description="See my experience and translation background."
          url="https://www.linkedin.com/in/ieva-luksti%C5%86a-365b47112/"
        />

        <LinkCard
          title="Direct Contact"
          description="Email me for custom translation projects."
          url="mailto:ieva.lukstina.lv@gmail.com"
        />
      </section>
    </div>
  );
}

function LinkCard({ title, description, url }: LinkCardProps) {
  return (
    <a className="card" href={url} target="_blank" rel="noopener noreferrer">
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}
