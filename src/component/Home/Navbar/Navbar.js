import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="Header">
             
            <nav className="navbar bg-light">
           
            <Link className="logo fw-bold ms-4"  to="Home">PERSONAL-PORTFOLIO</Link>
               {/* <Link className="nav-link active" to="/Home">Home</Link> */}
               <Link className="nav-link active" to="About">About</Link>
               <Link className="nav-link active" to="/Resume">Resume</Link>
               <Link className="nav-link active" to="/Project">Project</Link>
               <Link className="nav-link active" to="/Blog">Blog</Link>
               <Link className="nav-link active" to="/Contact">Contact</Link>
               
            </nav>
            
        </div>
    );
};

export default Navbar;