import './Portfolio.css';

const portfolioItems = [
  {
    title: "Zomato Restaurant Analysis",
    desc: "Cleaned raw data and prepared it for Analysis. Used Power BI for creating calculated columns used for plotting graphs.",
    link: "https://github.com/Mahesh-Sarkar06/Zomato-Restaurant-Analysis/"
  },
  {
    title: "Tello Drone - Mapping and Follower",
    desc: "Developed Python script which can create a mapping of an area on real time basis. It can also track and follow any object.",
    link: "https://github.com/Mahesh-Sarkar06/Tello-drone-mapping-and-follower"
  },
  {
    title: "Mask Detection",
    desc: "Developed Python script by training a CNN model on Haarcascade dataset. Achieved an accuracy of 87%.",
    link: "https://github.com/Mahesh-Sarkar06/Mask-detection"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <h2 className="section-title">Other Scripts & Analysis</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item, idx) => (
          <div key={idx} className="glass-card portfolio-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" className="port-link">Explore Code &rarr;</a>
          </div>
        ))}
      </div>
    </section>
  );
}
