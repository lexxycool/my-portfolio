import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import AboutMe from './AboutMe';
import Projects from './Projects'





function App() {
  return (
     <Router> 
        <Switch>
          <Route path='/projects'>
            <Header />
            <Projects />
          </Route>
          <Route path='/aboutMe'>
            <Header />
            <AboutMe />
          </Route>
          <Route path='/contact'> 
            <Header />
            <Contact />
          </Route>

          <Route path='/' exact>
            <Header />
            <Home />   
          </Route>  

        </Switch> 
      </Router>
    
    );
     
  }
      
    


export default App;
