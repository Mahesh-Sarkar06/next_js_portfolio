import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container glass-card">
        <p className="contact-desc">
          Contact me and will discuss the project and its goals. I'm currently looking for new opportunities.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={5} required></textarea>
          <button type="submit" className="btn w-full">Send Message</button>
        </form>
      </div>
    </section>
  );
}
