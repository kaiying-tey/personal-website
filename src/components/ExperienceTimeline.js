import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { experienceData } from '../data';
import '../styles/ExperienceTimeline.scss';

const ExperienceTimeline = () => {

    return (
         <section id="experience" className="experience">
            <Container className="experience-container">
                <h2 className="experience-title text-center mb-5">MY JOURNEY</h2>
                <VerticalTimeline lineColor='black' className="experience-timeline">
                    
                    {experienceData.map((item, index) => (
                        <VerticalTimelineElement
                            className="experience-timeline-element"
                            key={index}
                            date={item.date}
                            dateClassName="experience-date"
                            iconStyle={{ 
                                background: item.type === 'work' ? '#6b5b95' : '#73946B', 
                                color: '#fff',
                                border: '3px solid #000',
                                boxShadow: '3px 3px 0 #000' 
                            }}
                            icon={ item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap /> }
                            contentStyle={{ 
                                background: '#141E46',
                                color: '#fff',
                                border: '3px solid #000',
                                boxShadow: '5px 5px 0 #000'
                            }}
                            contentArrowStyle={{ 
                                borderRight: '20px solid #000',
                            }}
                        >
                            <h3 className="experience-timeline-title">{item.title}</h3>
                            <h4 className="experience-timeline-subtitle">{item.company}</h4>
                            <p className="experience-timeline-desc">{item.description}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </Container>
        </section>
    )
}

export default ExperienceTimeline;
