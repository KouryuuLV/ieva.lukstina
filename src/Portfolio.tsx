import "./Portfolio.css";
import profileImage from "./assets/ieva.jpg";

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
          alt="Your main portrait"
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
{/* Link Cards */}
      <section className="card-grid">

        {/* Agencies you work with */}
        <LinkCard
          title="Agency: ExampleTranslations"
          description="Professional translation agency I collaborate with."
          url="https://exampletranslations.com"
        />

        <LinkCard
          title="Agency: BalticLinguists"
          description="Trusted partner for multilingual projects."
          url="https://balticlinguists.eu"
        />

        {/* Places to hire you */}
        <LinkCard
          title="Hire Me on Upwork"
          description="My freelance translator profile on Upwork."
          url="https://www.upwork.com"
        />

        <LinkCard
          title="Hire Me on Fiverr"
          description="Order translation services directly."
          url="https://www.fiverr.com"
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
