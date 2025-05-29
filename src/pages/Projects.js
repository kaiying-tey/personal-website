import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Container, Row } from 'react-bootstrap';
import { projectsData } from '../data';
import '../styles/Projects.scss';

const Projects = () => {
  return (
    <section id="projects" className="py-5 px-4" data-aos="fade-up">
      <Container>
          <h2 className='projects-title'>MY PROJECTS</h2>
          <Row xs={1} md={2} lg={4} className="g-4">
              {projectsData.map((project, index) => (
                  <ProjectCard project={project} index={index}/>
              ))}
          </Row>
      </Container>
    </section>
  )
};

export default Projects;