import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Navbar from './component/Home/Navbar/Navbar';
import About from './component/Home/About/About';
import Resume from './component/Home/Resume/Resume';
import Blog from './component/Home/Blog/Blog';
import Contact from './component/Home/Contact/Contact';
import Project from './component/Home/Project/Project';
import Footer from './component/Home/Footer/Footer';
import Particles from 'react-particles-js';




function App() {
  
  return (
    <div className="App">
      <Particles
        className='fixed-top'
        params={{
          "particles": {
            "number": {
              "value": 50
            },
            "size": {
              "value": 2
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }}
        height='100vh'
        style={{ position: 'absolute', zIndex: '-9999'}}
      />
      <div style={{ position: 'relative', zIndex: '9999' ,overflowX:'hidden'}}>
     
      <Router>
      <Navbar></Navbar>
        <Switch>

        <Route exact path="/">
        <Home></Home>
        <About></About>
        <Resume></Resume>
        <Project></Project>
        <Blog></Blog>
        <Contact></Contact>
        </Route>

        <Route path="/home">
        <Home></Home>
        <About></About>
        <Resume></Resume>
        <Project></Project>
        <Blog></Blog>
        <Contact></Contact>
          </Route>

          <Route path="/about">
           <About></About>
          </Route>

          <Route path="/resume">
           <Resume></Resume>
          </Route>

          <Route path="/Blog">
           <Blog></Blog>
          </Route>

          <Route path="/Contact">
          <Contact></Contact>
          </Route>

          <Route path="/project">
          <Project></Project>
          </Route>
      
        </Switch>
        <Footer></Footer>
      </Router>
      </div>
    </div>
  );
}

export default App;
