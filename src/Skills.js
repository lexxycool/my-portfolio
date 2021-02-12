import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './styles'
import logo1 from './logo/html.png';
import logo2 from './logo/css3.png';
import logo3 from './logo/js.png';
import logo4 from './logo/bootstrap.png';
import logo5 from './logo/git.png';
import logo6 from './logo/github.png';
import logo7 from './logo/react.png';
import logo8 from './logo/node.png';
import logo9 from './logo/firebase.png';



function Skills() {
    return (
    
            <Container className='bg-dark' id='/skills' fluid> 

            <h1 className='col-6 pt-5 mx-auto'>
                <span style={styles.skillHeader}>My Skills</span>
            </h1>
               
            <Row className='pt-5' xs={3} >
                <Row className='justify-content-center ' xs={2} md={4} lg={6}>
                    <Col>
                        <img className='pb-4' src={logo1} alt=''/>
                        <img className='pb-4' src={logo2} alt='' />
                        <img className='pb-4' src={logo3} alt='' />
                    </Col>
                </Row>

                <Row className='justify-content-center' xs={2} md={4} lg={6}>
                    <Col>
                        <img className='pb-4' src={logo4} alt='' />
                        <img className='pb-4' src={logo5} alt='' />
                        <img className='pb-4' src={logo6} alt='' />
                    </Col>
                </Row>
               

                <Row className='justify-content-center' xs={2} md={4} lg={6}>
                    <Col>
                        <img className='pb-4' src={logo7} alt='' />
                        <img className='pb-4' src={logo8} alt='' />
                        <img className='pb-4' src={logo9} alt='' />
                    </Col>
                </Row>
              
            </Row>
           

        </Container>
       
    )
}

export default Skills
