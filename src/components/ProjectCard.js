import { Card, Button, Badge } from "react-bootstrap";
import { FiGithub } from 'react-icons/fi';
import '../styles/Projects.scss';

const ProjectCard = ({ project, index }) => {

  return (
      <div className="col-md-6 mb-4 mt-5" key={index}>
        <Card className="h-100 project-card">
          <div className="project-card-img-container">
            <Card.Img 
              variant="top" 
              src={project.image} 
              alt={project.title}
              className="project-card-img"
            />
          </div>
          <Card.Body>
              <Card.Title className='project-card-title'>{project.title}</Card.Title>
              <div className="project-tech-tags mt-auto">
                  {project.tech.map(tech => (
                      <Badge key={tech} className="project-card-tag me-1 mb-1">{tech}</Badge>
                  ))}
              </div>
              <Card.Text className="project-card-desc">{project.description}</Card.Text>
              <Card.Footer className="project-card-footer">
                <Button variant="outline-light" className="project-icon-link" href={project.github} target="_blank">
                  <FiGithub className="project-card-icon" /> Repository
                </Button>
              </Card.Footer>
          </Card.Body>
        </Card>
      </div>

  )
}

export default ProjectCard;