import React from 'react';
import Typewriter from "typewriter-effect";
import './Home.css'
import image from '../../../image/sujon2.png'

const Home = () => {
    return (
        <div className="row bg-dark size">
          
            <div className="col-md-5 mt-5">
                 
                   <img className="img" src={image} alt=""></img>
                 
            </div>


            <div className="col-md-7 ml-5 text-white text-right margin">
           
            <h3>Welcome My Website</h3>
            <h1 className="title">I’M MD SUJON</h1>
            
<div style={{textAlign:'center'}}><div className="Typewriter" data-testid="typewriter-wrapper">
    <span className="Typewriter__wrapper">
    <Typewriter
        
        onInit={(typewriter)=> {

        typewriter
        
        .typeString("Web Developer")
            
        .pauseFor(1000)
        .deleteAll()
        .typeString("Welcomes You")
        .start();
        }}
        />
    </span>

</div></div>

            
            <a href="https://drive.google.com/file/d/1dB2Y1cU1Eyj_E8vKB6w2v9omybtDDud1/view?usp=sharing" target="_blank" class="mt-4 downloadCV btn btn-primary">
                <i class="fas fa-download">&nbsp;</i>Download CV</a>
            </div>
           
        </div>
    );
};

export default Home;