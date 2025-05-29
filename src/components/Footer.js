import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <div className="footer-info">
              <h5 className="footer-name">Tey Kai Ying</h5>
              <p className="footer-title">Software Developer</p>
            </div>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="footer-social-links">
              <a href="https://github.com/kaiying-tey" target="_blank" rel="noreferrer" className="footer-social-icon">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/kai-ying-tey-2773301b8/" target="_blank" rel="noreferrer" className="footer-social-icon">
                <FaLinkedin size={24} />
              </a>
            </div>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>    
    </footer>
  )
};

export default Footer;