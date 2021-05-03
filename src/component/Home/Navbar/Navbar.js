import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {animateScroll as scroll} from 'react-scroll'; 

const Navbar = () => {
    return (
      
      <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light fw-bold">
          <div className="container-fluid">
              <a style={{cursor:'pointer'}} className="navbar-brand text-white" onClick={()=>{scroll.scrollToTop()}}><h2>Md Sujon</h2></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse topbar" id="navbarNavAltMarkup">
                  <div className="ms-auto text-center navbar-nav">
                      <a className="nav-link links active me-2 text-white" onClick={()=>{scroll.scrollToTop()}}></a>
                      <Link className="nav-link links active me-2 text-white" to="Home" smooth={true} duration={1000}>Home</Link>
                      <Link className="nav-link links active me-2 text-white" to="about" smooth={true} duration={1000}>About</Link>
                      <Link className="nav-link links active me-2 text-white" to="project" smooth={true} duration={1000}>Project</Link>
                      <Link className="nav-link links active me-2 text-white" to="blog" smooth={true} duration={1000}>Blog</Link>
                      <Link className="nav-link links active me-2 text-white" to="contact" smooth={true} duration={1000}>Contact</Link> 
                  </div>
              </div>
          </div>
      </nav>
  </div>
    );
};

export default Navbar;