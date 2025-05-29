import React from 'react';
import { Container } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import '../styles/Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <Container>
        <h2 className="contact-info-title">Get In Touch</h2>
        <div className="contact-contact-methods">
            <div className="contact-contact-item">
                <FaEnvelope className="contact-contact-icon" size={24} />
                <a href="mailto:your.email@example.com">kaiying001@gmail.com</a>
            </div>
            <div className="contact-contact-item">
                <FaLinkedin className="contact-contact-icon" size={24} />
                <a href="https://www.linkedin.com/in/kai-ying-tey-2773301b8/" target="_blank" rel="noopener noreferrer">
                   LinkedIn - KaiYingTey
                </a>
            </div>
            <div className="contact-contact-item">
                <FaGithub className="contact-contact-icon" size={20} />
                <a href="https://github.com/kaiying-tey" target="_blank" rel="noreferrer">
                  github.com/kaiying-tey
                </a>
            </div>
        </div>
      </Container>
    </section>
  )
};

export default Contact;