import './Skills.css';

const certifications = [
  {
    title: "Fabric Data Engineer Associate",
    desc: "Gained hands-on expertise in Fabric OneLake Unified Platform, building end-to-end ETL pipeline, monitoring and deploying on higher environments."
  },
  {
    title: "Databricks Certified Data Engineer Associate",
    desc: "Gained hands-on expertise in Databricks Lakehouse Platform, building multi-hop ETL & DLT pipelines with Spark SQL & PySpark."
  },
  {
    title: "Databricks Accredited Azure Platform Architect",
    desc: "Demonstrates proficiency in building data pipelines, optimizing workflows, and working with Apache Spark on Databricks."
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills & Certifications</h2>
      <div className="skills-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="glass-card skill-card">
            <h3>{cert.title}</h3>
            <p>{cert.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
