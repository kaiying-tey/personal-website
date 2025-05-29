import { Container, Row, Col, Button } from 'react-bootstrap';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Skills from '../components/Skills';
import ProfilePic from '../images/profile-1.jpeg';
import '../styles/Home.scss';
import { FaGithub, FaFileDownload } from 'react-icons/fa';
import { PiProjectorScreenChart } from "react-icons/pi";


const Home = () => {

  return (
    <section id="home" className="home-section" data-aos="fade-up">
      <div className="star-layer"></div>
      <Container>
          <Row className="align-items-center">
            <Col lg={7} className="mb-3 mb-lg-0 px-4 order-lg-1 order-2">
              <h4 className="home-hello">HELLO WORLD!</h4>
              <h1 className="home-name">
                I'm <span className="home-name-highlight">Tey Kai Ying</span>
              </h1>
              <h2 className="mt-3 home-role-text">Junior Software Developer</h2>
              <p className="home-bio">
                  Hi there! I'm a junior software developer with a love for fun, interactive web apps. 
                  I'm passionate about clean code, creative UIs, and building things that spark joy. I focus on frontend development (React is my current favorite) and I'm always exploring new ways to make websites more dynamic and delightful.
                  When I'm not coding, I enjoy watching variety shows, playing sports, and relaxing with cozy indie games.
              </p>
              <p className="home-bio mb-5">
                🕹️ Fun Facts: My personal debugging method: console.log('WHY'); I drink more coffee than my IDE runs builds.
              </p>
              <div className="home-top-buttons">
                <Button 
                  variant='outline-primary'
                  className="home-top-btn"
                  href="/TeyKaiYing_Resume.pdf"
                  download="TeyKaiYing_Resume.pdf"
                >
                  <FaFileDownload size={24} className="me-2 home-top-btn-icon" /> DOWNLOAD RESUME
                </Button>
                <Button 
                  variant='primary'
                  className="home-top-btn"
                  href="/projects"
                >
                  <PiProjectorScreenChart size={24} className="me-2 home-top-btn-icon" /> MY PROJECTS
                </Button>
              </div>
            </Col>
            <Col lg={5} className="order-lg-2 order-1">
                <div className="home-avatar">
                  <img
                    src={ProfilePic}
                    alt="Profile Pic"
                    className="img-fluid home-avatar-img"
                  />
                </div>
            </Col>
          </Row>

          {/* The experience timeline component */}
          <ExperienceTimeline />

          {/* Skills section */}
          <Skills />

      </Container>
    </section>
  )
};

export default Home;