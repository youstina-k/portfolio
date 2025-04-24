import React, { useState } from 'react';
import './App.css';
import profileImage from './images/2.png';
import sprintsCertificate from './images/sprints-certifi.jpg'
import Resume from './images/Youstina.pdf'

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="container">
          <div className="logo">Youstina Kamal</div>
          <ul className="nav-links">
            <li className={activeSection === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>Home</li>
            <li className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>About</li>
            <li className={activeSection === 'resume' ? 'active' : ''} onClick={() => handleNavClick('resume')}>Resume</li>
            <li className={activeSection === 'projects' ? 'active' : ''} onClick={() => handleNavClick('projects')}>Projects</li>
            <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>Contact</li>
          </ul>
        </div>
      </nav>

      <main>
        {activeSection === 'home' && <HomeSection />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'resume' && <ResumeSection />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>

    
      <footer>
        <div className="container">
          <p>2025 Youstina Kamal. All rights reserved.</p>
          <div className="social-links">
            <a href="https://linkedin.com/in/youstina-kamal" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/youstina-k?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:youstinakamal58@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


function HomeSection() {
  return (
    <section className="home-section">
      <div className="container">
        <div className="hero-content">
          <h1>Hello, I'm <span>Youstina Kamal</span></h1>
          <h2>Software Engineer</h2>
          <p>Fresh graduate frontend developer with React Js. Passionate about building dynamic, engaging web applications.</p>
          <a href={Resume} target="_blank" rel="noopener noreferrer">View My Resume</a>
        </div>
        <div className="hero-image">
          <img style={{width:250}} src={profileImage} alt="Youstina Kamal - Software Engineer" />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I'm a Computer Engineer graduated from faculty of Engineering , Assiut University with Grade very good with Honors and with a passion for web development and problem-solving.</p>
            <p>My journey in technology has equipped me with skills in both frontend development and system administration, allowing me to approach problems from multiple perspectives.</p>
            
          </div>
          <div className="resume-block">
              <h3>Skills</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Programming</h4>
                  <ul>
                    <li>C++</li>
                    <li>C</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Web Development</h4>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Other</h4>
                  <ul>
                    <li>OOP</li>
                    <li>Data Structures</li>
                    <li>Operating Systems</li>
                    <li>Embedded Systems</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Soft Skills</h4>
                  <ul>
                    <li>Analytical Skills</li>
                    <li>Teamwork</li>
                    <li>Self-learning</li>
                    <li>Problem Solving</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

function ResumeSection() {
  return (
    <section className="resume-section" id="resume">
      <div className="container">
        <h2>My Resume</h2>
        <div className="resume-content">
          <div className="resume-left">
            <div className="resume-block">
              <h3>Education</h3>
              <div className="resume-item">
                <h4>Bachelor of Computer Engineering</h4>
                <p className="institution">Assiut University</p>
                <p className="date">Sep 2019 - Jul 2024</p>
                <p className="details">Grade: Very Good with Honors</p>
                <p className="details">Graduated in Top 10 of Class</p>
              </div>
            </div>

            <div className="resume-block">
              <h3>Professional Experience</h3>
              <div className="resume-item">
                <h4>Intern</h4>
                <p className="institution">Orascom Development - Cairo, Egypt</p>
                <p className="date">Jul 2023 - Aug 2023</p>
                <p className="details">Assisted senior developers to meet deadlines by developing several pages for the company's website</p>
              </div>
            </div>

            <div className="resume-block">
              <h3>Accomplishments</h3>
              <div className="resume-item">
                <h4>Graduation Project: Design & Control of a Ball Balancing Table</h4>
                <ul className="project-details">
                  <li>Applied PID control theory to model and control ball movement</li>
                  <li>Designed feedback mechanism using PID control</li>
                  <li>Utilized camera for ball position measurement</li>
                  <li>Tuned PID parameters through theoretical predictions and iterative testing</li>
                  <li>Developed fully functional PID control system</li>
                </ul>
              </div>
              
            </div>
          </div>

          <div className="resume-right">
            

            <div className="resume-block">
              <h3>Certifications</h3>
              <div className="resume-item">
                <h4>Red Hat System Administration I (RH124)</h4>
                <p className="date">Feb 2024 - May 2024</p>
              </div>
              <div className="resume-item">
                <h4>Sprints - Web Development Fundamentals</h4>
                <p className="date">Jun 2025 - Mar 2025</p>
                <a  href={sprintsCertificate}  target="_blank" rel="noopener noreferrer">View Certificate</a>
              </div>
              <div className="resume-item">
                <h4>FreeCodeCamp - Front End Development Libraries</h4>
                <p className="date">Feb 2025 - Mar 2025</p>
                <a href="https://freecodecamp.org/certification/youstina/front-end-development-libraries" target="_blank" rel="noopener noreferrer">View Certificate</a>
              </div>
              <div className="skills">
              <h3>Languages</h3>
              <ul>
                <li>English (fluent)</li>
                <li>French (intermediate)</li>
              </ul>
            </div>
            </div>
            

            
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Ball Balancing Table",
      description: "Applied PID control theory to model and control the movement of a ball on a flat surface as my graduation project.",
      link: "#ball-balancing-project"
    },
    {
      id: 2,
      title: "Orascom Development Website",
      description: "Developed several pages for the company's website during my internship.",
      link: "#orascom-project"
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "Built this responsive portfolio website using React and modern CSS.",
      link: "#portfolio-project"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id} id={`project-${project.id}`}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">View Details</a>
            </div>
          ))}</div></div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData(prev =>({...prev,[name]: value}))};

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    setFormData({
      name: '',
      email: '',
      message: ''})};

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> youstinakamal58@gmail.com</p>
            <p><strong>Phone:</strong> +201270442556</p>
            <p><strong>Address:</strong> Cairo, Egypt</p>
           
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;