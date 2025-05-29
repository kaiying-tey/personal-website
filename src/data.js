import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaPython,
  FaJava,
  FaGitAlt,
  FaPhp,
  FaLinux 
} from 'react-icons/fa';
import { PiFileSql, PiFileCSharp } from "react-icons/pi";
import { SiPostman } from "react-icons/si";


export const experienceData = [
  {
    title: "Software Engineer",
    company: "Juris Technologies",
    date: "May 2023 - May 2024",
    type: "work",
    description: "Developed software solutions for banking and financial institutions using PHP, JavaScript, HTML and PL/SQL",
    skills: ["PHP", "JavaScript", "HTML/CSS", "SQL"]
  },
  {
    title: "Web Developer Intern",
    company: "Times Software Pte Ltd",
    date: "Nov 2021 - Feb 2022",
    type: "work",
    description: "Designed and implemented visual elements and overall layout of payroll and human resource management web application using C#, Blazor framework.",
    skills: ["C#", "ASP .Net"]
  },
  {
    title: "Freelance Front-End Web Developer",
    company: "Reluvate Technologies",
    date: "Sep 2021 - Oct 2021",
    type: "work",
    description: "Develop user interfaces using ReactJS, ensuring responsive and interactive designs.",
    skills: ["HTML/CSS", "JavaScript"]
  },
  {
    title: "Computer Science Degree",
    company: "Monash University Malaysia",
    date: "Oct 2019 - Mar 2023",
    type: "education",
    description: "Specialized in advanced computer science with focus on web technologies.",
    skills: ["Algorithms", "Data Structures", "Java", "Python", "Databases"]
  }
]

export const projectsData = [
  {
    title: "Netflix Landing Page",
    description: "Netflix Landing Page Clone with HTML, CSS (2019 version).",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["HTML", "CSS"],
    github: "https://github.com/kaiying-tey/netflix-landing-page"
  },
  {
    title: "Ravenous",
    description: "A simple React app to search restaurants, integrate with Yelp API, based on Codecademy course.",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["ReactJS", "JavaScript", "Yelp API"],
    github: "https://github.com/kaiying-tey/ravenous-react"
  },
  {
    title: "Personal Portfolio Website",
    description: "A responsive personal portfolio website built with React and Bootstrap.",
    image: "https://plus.unsplash.com/premium_vector-1734721796189-36e9788de24d?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["ReactJS", "Bootstrap", "JavaScript", "CSS"],
    github: "https://github.com/yourusername/portfolio"
  },
  {
    title: "Jamming",
    description: "A React web application that lets users search Spotify tracks, create custom playlists, and save them directly to their Spotify account, based on Codecademy course.",
    image: "https://images.unsplash.com/photo-1613329671121-5d1cf551cc3f?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["ReactJS", "JavaScript", "Spotify API"],
    github: "https://github.com/kaiying-tey/jamming-react"
  },
  {
    title: "Zombies and Braaaains OOP Project",
    description: "A text-based 'rogue-like' game with the theme of Zombie hunting, designed and implemented for a university course in 2020 using Java.",
    image: "https://images.unsplash.com/photo-1615830895977-70fa153b7ac0?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["Java"],
    github: "https://github.com/yourusername/task-app"
  },
  {
    title: "UPGrad",
    description: "A React web app that aims to make job hunting easier for students and fresh graduates, as submission for QuickHack 2021 Monash with the theme Career.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["ReactJS", "JavaScript"],
    github: "https://github.com/kaiying-tey/UPGrad"
  },
]

export const skillsData = [
    { name: 'JavaScript', icon: <FaJs />, color: '#F0DB4F' },
    { name: 'PHP', icon: <FaPhp />, color: '#007ACC' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#2965F1' },
    { name: 'SQL', icon: <PiFileSql />, color: '#4E71FF' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'Java', icon: <FaJava />, color: '#007396' },
    { name: 'Linux', icon: <FaLinux />, color: '#F3C623' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF9B45' },
];