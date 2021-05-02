import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
      
  <nav className="navbar navbar-expand-lg fw-bold Header">
    <h1 className="text-primary"><Link class="text-uppercase fw-bold ms-5" to="Home">personal-website</Link></h1>

 
  <a className="navbar-brand text" href="home">Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
        <a className="navbar-brand" href="About">About<span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="navbar-brand" href="Resume">Resume</a>
      </li>
      
      <li className="nav-item">
        <a className="navbar-brand" href="Project">Project</a>
      </li>

      <li className="nav-item">
        <a className="navbar-brand" href="Blog">Blog</a>
      </li>

      <li className="nav-item">
        <a className="navbar-brand" href="Contact">Contact</a>
      </li>
    </ul>
    
  </div>
  
</nav>
      
  
    );
};

export default Navbar;