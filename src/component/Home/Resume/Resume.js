import React from 'react';
import './Resume.css'

const Resume = () => {
    return (
        <div className="text-white">
                <a href="https://drive.google.com/uc?export=download&id=1dB2Y1cU1Eyj_E8vKB6w2v9omybtDDud1" target="blank" class="mt-4 downloadCV btn btn-warning">
                <i class="fas fa-download">&nbsp;</i>Download Resume</a>

           
<div className="row justify-Content-center text-center py-5">

                        <div className="col-md-6">
                        <h1 className="text-warning">Educations</h1>

                       <div className="border border-warning ms-5 mt-3 warpper-1">
                       <h6>BSC Engineering at Green University Of Bangladesh.</h6>
                       <p>Apr, 2019 - Present</p>
                       <p className="fw-bold">Grade: Running (5th Semester)</p>
                       </div>

                       <div className="border border-warning ms-5 mt-3 warpper-1">
                       <h6>Diploma in Engineering at Patuakhali Polytechnic Institute.</h6>
                       <p>Aug, 2014 - Dec, 2018</p>
                       <p className="fw-bold">Grade: 3.22 (Out off 4)</p>
                       </div>

                       <div className=" border border-warning ms-5 mt-3 warpper-1">
                       <h6>Bankerhat Co-Operative Secondary School</h6>
                       <p>Jan, 2010 - Feb, 2014 </p>
                       <p className="fw-bold" > Grade: 4.50 (Out off 5)</p>
                       </div>

                         </div>

                         <div className="col-md-6">
                          <h1 className="text-warning">Skills</h1>


                          <div className=" border border-warning me-5 mt-3 warpper-1">
                           <h6>Full Stack</h6>
                         <h6>
                          Html,Css,Bootstrap ,JavaScript 
                          React.js ,Material UI </h6>
                          <h6>React Bootstrap ,Node js</h6>
                          <h6>MongoDB ,Rest Api ,Strip
                          JSON</h6>
                        </div>

                        <div className=" border border-warning me-5 mt-3 warpper-1">
                           <h6>Deployment</h6>
                         <h6>Heroku,Github</h6>
                          <h6>Firebase</h6>
                          <h6>Netlify</h6>
                        </div>


                           <div className=" border border-warning me-5 mt-3 warpper-1">
                           <h6>Programming Language</h6>
                         <h6>C</h6>
                          <h6>Python</h6>
                          <h6>C++</h6>
                        </div>


                          

                         </div>

</div>
<a href="https://drive.google.com/uc?export=download&id=1dB2Y1cU1Eyj_E8vKB6w2v9omybtDDud1" target="blank" class="mt-4 downloadCV btn btn-warning">
                <i class="fas fa-download">&nbsp;</i>Download Resume</a>

        </div>
    );
};

export default Resume;