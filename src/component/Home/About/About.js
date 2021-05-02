import React from 'react';
import image from '../../../image/sujon2.png'
import ProgressBar from 'react-bootstrap/ProgressBar'
import './About.css'

const About = () => {
    return (
        <div className="row bg-dark text-white ">
            
            <div className="col-md-6 ms-5 text-center mt-5 py-5 ">
                <h4 className="fw-bold about">Who am i?</h4>
                <h1>I'm Md Sujon, a visual </h1>
                <h1 className="fw-bold text-primary"><span>Full Stack Developer</span></h1>
              <p>Courteous and enthusiastic. I am a full-stack Web developer
               with html,css,javascript,react.Js,node.Js and MongoDB as my
                 tack stack. My goal is constantly pushed towards presenting
                  high-quality revel in with the first-rate degree of exceptional
                    and service to them</p>
            </div>
            <div className="col-md-5">
            <img className="img me-5 mt-5" src={image} alt=""></img>
            </div>

            <h1 className="text-center  mt-5 fw-bold text-primary mb-5">My Skills</h1>


               <div className="">
                   <div className="row justify-content-center">
                   <div className="col-md-5  text-start">
                   <h2 className="text-danger">Html</h2><ProgressBar  className="pl-5 mt-3" animated now={90} />
                   <h2 className="text-primary">Css</h2><ProgressBar  className="pl-5 mt-3" animated now={80} />
                   <h2 className="text-success">Bootstrap</h2><ProgressBar  className="pl-5 mt-3" animated now={70} />
                   <h2 className="text-info">JavaScript</h2><ProgressBar  className="pl-5 mt-3" animated now={80} />
                   <h2 className="text-warning">React.js</h2><ProgressBar  className="pl-5 mt-3" animated now={70} />
                   <h2 className="text-danger">Material UI</h2><ProgressBar  className="pl-5 mt-3" animated now={80} />
                   <h2 className="text-info">Express JS</h2><ProgressBar  className="pl-5 mt-3" animated now={80} />
                   
                   </div> 
                   <div className="col-md-5 text-start">
                   <h2 className="text-danger">React Bootstrap</h2><ProgressBar  className="pl-5 mt-3" animated now={75} />
                   <h2 className="text-primary">Node js</h2><ProgressBar  className="pl-5 mt-3" animated now={75} />
                   <h2 className="text-success">MongoDB</h2><ProgressBar  className="pl-5 mt-3" animated now={70} />
                   <h2 className="text-info">Rest Api</h2><ProgressBar  className="pl-5 mt-3" animated now={60} />
                   <h2 className="text-warning">Strip</h2><ProgressBar  className="pl-5 mt-3" animated now={80} />
                   <h2 className="text-danger">JSON</h2><ProgressBar  className="pl-5 mt-3 " animated now={70} />
                   <h2 className="text-info">TypeScript</h2><ProgressBar  className="pl-5 mb-5 mt-3" animated now={80} />
                        </div>
                   </div>

                   <h1 className="text-center  mt-5 fw-bold text-primary">My Others Skills</h1>
                   <div className="row justify-content-center">

                        <div className="col-md-5">
                          <h1>Comming Soon....</h1>
                        </div>
                        <div className="col-md-5">
                         <h1>Comming Soon....</h1>
                        </div>

                   </div>
               
               
               
               
               </div> 
           

        </div>
    );
};

export default About;