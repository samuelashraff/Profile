import '../styles/contact.css';
import '../styles/base.css';
import Links from '../components/Links';

export default function Contact() {
  return (
    <div className="main-container stagger centered">
      <h1>Contact Me</h1>
      <p className="contact-intro">
        If you found my profile interesting, don't hesitate to reach out!
      </p>
      <p className="contact-intro">
        I'm always open to discussing new opportunities, collaborations, 
        or just connecting with like-minded professionals.
      </p>
      <p className="contact-intro">
        Feel free to reach out to me via the following contact details:
      </p>
      <div className="contact-info stagger stagger-late">
        <div className="contact-item">
          <span className="contact-label">Phone:</span>
          <a href="tel:+447498374047" className="contact-link">+44 7498 374047</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">Email:</span>
          <a href="mailto:samuel.ashraff@gmail.com" className="contact-link">samuel.ashraff@gmail.com</a>
        </div>
      </div>
      <div className="stagger stagger-last">
        <Links />
      </div>
    </div>
  );
};
