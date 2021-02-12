import React from 'react';
import { Navbar, Nav , Container } from 'react-bootstrap';




function Header() {
    return (
        
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky='top'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ml-auto'/>
                <Navbar.Collapse id="responsive-navbar-nav">
                     <Container className="ml-auto">
                            <Nav className="ml-auto">
                                <Nav.Link href='/'>Home</Nav.Link>
                                <Nav.Link href='/aboutMe'>About Me</Nav.Link>
                                <Nav.Link href='/projects'>Projects</Nav.Link>
                                <Nav.Link href='/contact'>Contact</Nav.Link>   
                            </Nav>
                     </Container>  
                </Navbar.Collapse>
            </Navbar>
             
          
      
    )
}

export default Header
