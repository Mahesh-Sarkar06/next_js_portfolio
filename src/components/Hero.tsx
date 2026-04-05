import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="section hero-section">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Mahesh Chandra Sarkar</span></h1>
        <h3>Data Engineer</h3>
        <p>Skilled in data manipulation, testing software, and building ETL pipelines.</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn">Contact Me</a>
          <a href="#about" className="btn btn-outline">Scroll Down</a>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <div className="glow-circle"></div>
        <div className="hero-avatar">M</div>
      </div>
    </section>
  );
}
