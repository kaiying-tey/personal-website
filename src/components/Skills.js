import React from 'react';
import '../styles/Home.scss';
import { Row, Col } from 'react-bootstrap';
import { skillsData } from '../data';


const Skills = () => {
    return (
        <section id="skills" className="home-skills-section">
            <h2 className="home-skill-title">MY SKILLS</h2>
            <Row className="justify-content-center">
              {skillsData.map((skill, index) => (
                <Col xs={4} sm={3} md={2} key={index} className="text-center mb-4">
                  <div 
                    className="home-skill-icon"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <div className="home-skill-name">{skill.name}</div>
                </Col>
              ))}
            </Row>
        </section>
    )
};

export default Skills;
