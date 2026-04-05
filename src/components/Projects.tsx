import './Projects.css';

const projects = [
  {
    title: "Kafka based UPI Transactions Data Pipeline",
    desc: "Consumed raw data from Kafka topic and ingested to S3 bucket. AWS Lambda triggered Databricks Notebook. Automated ETL using Lakeflow Pipeline.",
    link: "https://github.com/Mahesh-Sarkar06/upi-transactions-etl-pipeline"
  },
  {
    title: "PhonePe Pulse Data Pipeline",
    desc: "Ingested JSON data, flattened nested JSON, cleaned rows, and transformed data for useful insights. Integrated visualization.",
    link: "https://github.com/Mahesh-Sarkar06/PhonePe-Pulse"
  },
  {
    title: "PostgreSQL Data Warehousing",
    desc: "Batch ingestion from source to Bronze Layer. Normalized data at Silver Layer and maintained CDC. Developed Star Schema.",
    link: "https://github.com/Mahesh-Sarkar06/Data-Warehouse"
  },
  {
    title: "Nifty Index Analysis",
    desc: "Ingested Nifty 50 stocks raw data using Copy Activity. Used Delta format for optimized querying and developed T-SQL scripts.",
    link: "https://github.com/Mahesh-Sarkar06/Nifty-50-Analysis"
  }
];

export default function Projects() {
  return (
    <section id="services" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="glass-card project-card">
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <a href={proj.link} target="_blank" className="btn btn-outline small-btn">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}
