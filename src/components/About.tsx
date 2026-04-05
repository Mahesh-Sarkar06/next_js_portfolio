import './About.css';

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-container glass-card">
        <p>Hello, my name is <strong>Mahesh Chandra Sarkar</strong>. I am a graduated student currently sharpening my skills on data engineering. I am passionate about manipulation of data and bring insight information.</p>
        <p>I am highly adaptive and flexible individual actively looking for full time opportunity in Data Engineering where I can leverage my experience, technical expertise, and problem-solving skills...</p>
        <p>I am creative, and ambitious with a talent for thinking outside the box. I bring innovative ideas to the table which can be useful in every part of life. I love to solve problems and overcoming challenges.</p>
        <div className="about-action">
          <a href="/packages/pdf/MAHESH_CHANDRA_SARKAR.pdf" target="_blank" className="btn">Download Resume</a>
        </div>
      </div>
    </section>
  );
}
