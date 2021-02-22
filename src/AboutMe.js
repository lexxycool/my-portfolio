import React from 'react';
import { FaTools } from 'react-icons/fa';
import { GiTeamIdea } from 'react-icons/gi';
import { Row, Col} from 'react-bootstrap';
import './AboutMe.css';




function AboutMe() {
    return (
  
        <div className='aboutMe'>
            
             <h1>About Me</h1>   
        <div className='aboutMe_body'> 
        
           <div className='aboutMe_text'> 
           
                <p>In Sept 2020 during the pandemic, I was furloughed from my workplace. </p>
                <p> I stumbled on a jquery line of code 
                    that created ripples with my name. Since then I fell in love with the creativity 
                    in coding as I admire sytlish beautiful web pages.
                </p> 
                
                <p> I enjoy learning new skills in web development and challenging myself creatively.</p>
                <p> I am open to opportunities to learn and grow as a developer
                     and would welcome the chance to join a team and dedicate myself
                     full-time to creating awesome things!
                </p>
                
            </div>
            <div className='aboutMe_skills'>
           <br/>

            <Row className='tech'>
                <Col>
                  <FaTools className='skill_symbol'/>  <p></p>
                        <h3>TECH SKILLS</h3>
                  <ul>
                        <li><p>HTML5</p></li>
                        <li><p>CSS3/Bootstrap</p></li>
                        <li><p>Javascript</p></li>
                        <li><p>React/React Native</p></li>
                        <li><p>Git/Github</p></li>
                        <li><p>Firebase</p></li>
                  </ul>
                </Col>

                 <Col>
                        <GiTeamIdea className='skill_symbol' /><p></p>
                        <h3>SOFT SKILLS</h3>
                    <ul>
                            <li><p>Team Work</p></li>
                            <li><p>Communication</p></li>
                            <li><p>Problem Solving</p></li>
                            <li><p>Work Ethic</p></li>
                            <li><p>Time Management</p></li>
                            <li><p>Positive Attitude</p></li>

                    </ul>
                
                </Col>
            </Row>
        </div>
            </div>
          
      </div>
    )
}

export default AboutMe
