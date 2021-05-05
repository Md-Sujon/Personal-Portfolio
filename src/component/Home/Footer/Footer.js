import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin,faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    return ( 
        <div className="">

                        <ul className="social-media list-inline size sujon ">
                            <li className="list-inline-item mt-5 "><a href="https://www.facebook.com/profile.php?id=100009262261632" target="blank"><FontAwesomeIcon className="icon active-icon icon-1" icon={faFacebookSquare} /></a></li>
                            <li className="list-inline-item "><a href="https://www.linkedin.com/in/md-sujon/" target="blank"><FontAwesomeIcon className="icon icon-1" icon={faLinkedin} /></a></li>
                            {/* <li className="list-inline-item"><a href="//instagram.com" target="blank"><FontAwesomeIcon className="icon icon-1" icon={faInstagram} /></a></li> */}
                            <li className="list-inline-item"><a href="https://github.com/Md-Sujon" target="blank"><FontAwesomeIcon className="icon icon-1" icon={faGithubSquare} /></a></li>
                             
                        </ul>

                        <div className="copyRight text-center text-white mb-2">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
                 
        </div>
    );
};

export default Footer;