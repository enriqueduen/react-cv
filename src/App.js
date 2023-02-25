import React, {useState} from 'react'

import {Navbar, Nav, Container, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import SkillsList from "./SkillsList";


function App() {
  {/* Default state - shows no skills */}
  const[skills, setSkills] = useState([])
  const[isSkillBtnVisible,setIsSkillBtnVisible] = useState(true)
  const[isHideSkillBtnVisible,setIsHideSkillBtnVisible] = useState(false)

  function showSkills(e){
    setSkills([{id: 0, name: 'C#.net', proficiency: 'high'},{id: 1, name: 'Python', proficiency: 'medium'},{id: 2, name: 'JavaScript', proficiency: 'medium'},{id: 3, name: 'C++', proficiency: 'medium'},{id: 4, name: 'SQL', proficiency: 'high'},{id: 5, name: 'Version control - Git', proficiency: 'high'},{id: 6, name: 'RPA technologies', proficiency: 'high'},{id: 7, name: 'Microsoft Power Platform', proficiency: 'high'},{id: 8, name: 'Cross Functional Team Collaboration', proficiency: 'high'},{id: 9, name: 'Project Management', proficiency: 'high'}])
    setIsSkillBtnVisible(isSkillBtnVisible => !isSkillBtnVisible)
    setIsHideSkillBtnVisible(isHideSkillBtnVisible => !isHideSkillBtnVisible)
  }

  function hideSkills(e){
    setSkills([])
    setIsSkillBtnVisible(isSkillBtnVisible => !isSkillBtnVisible)
    setIsHideSkillBtnVisible(isHideSkillBtnVisible => !isHideSkillBtnVisible)
  }

  return (
    <>

    {/* Navigation bar - black color */}

      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Resume</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#work-experience">Work Experience</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     

      <Container>

        {/* Resume header */}

        <div>
          <h1 className="mb-2 mt-5">
              LUIS ENRIQUE
              <span className="text-primary"> DUEN</span>
          </h1>
          <div className="subheading mb-5">
          Ciudad Juárez, Chihuahua, México · (656) 364-14-39 ·
              <a href="enriqueduen@gmail.com"> enriqueduen@gmail.com </a>
          </div>
        </div>

        {/* Brief summary */}
        <div id="about">
          <h3>About me</h3>
          <p className="mb-5">As a software developer with a mechatronics engineering degree, I bring a unique blend of technical skills to development. I create innovative and efficient solutions that prioritize user experience, security, and scalability. I am a collaborative team player who delivers high-quality results on time.</p>
        </div>

        {/* Work experiencie summary*/}
        <div id="work-experience">
          <h3>Work Experience</h3>
          <h5>Program Manager (Current Position) (2019 - ) - Genpact</h5>
          <ul>
            <li>Lead research and development projects with significant business impact</li>
            <li>Collaborate with cross-functional teams to ensure successful project delivery</li>
          </ul>
          <h5>Senior Automations Developer (2017-2019) - Genpact</h5>
          <ul>
            <li>Designed and developed automation solutions using RPA technologies, .NET, Python, and Microsoft Power Platform</li>
            <li>Improved business processes and efficiency through automation</li>
          </ul>
          <h5>Junior Software Developer (2014-2017) - Genpact</h5>
          <ul>
            <li>Created desktop applications using .NET to support outsourcing business processes</li>
            <li>Contributed to the development of high-quality software solutions</li>
          </ul>
        </div>
        <div id="education">
          <h3>Education</h3>
          <p className="mb-5">Bachelor of in Mechatronics Engineering. Universidad Autónoma de Ciudad Juárez, Mexico. 2014-2019</p>
        </div>

        <div id="skills" className="mb-5">
          <h3 className="mb-4">Skills</h3>

          {isSkillBtnVisible && (<Button onClick={showSkills}>Show Skills</Button>)}
          <SkillsList skills = {skills} />
          {isHideSkillBtnVisible && (<Button onClick={hideSkills}>Hide Skills</Button>)}
        </div>
        
        
      </Container>
    </>
  );
}

export default App;
