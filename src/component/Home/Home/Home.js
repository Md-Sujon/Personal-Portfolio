import React from 'react';
import Typical from 'react-typical'
import './Home.css'
import image from '../../../image/sujon2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Home = () => {

    return (
        <div className="row size back">
          
            <div className="col-md-5 mt-5">
                 
                   <img className="img " src={image} alt=""></img>
                 
            </div>


            <div className="col-md-7 ml-5 text-white text-right margin">
           
            <h3>Welcome My Website</h3>
            <h1 className="title">I’M MD SUJON<FontAwesomeIcon icon={['fab', 'apple']} /></h1>
            
<div style={{textAlign:'center' ,textColor:'blue'}}>

<h3 className="text-warning">
                    <Typical className="green-effect" 
                    loop={Infinity} 
                    wrapper="b"
                    steps={[
                        'I am Web Developer',
                        1000,
                        'I am Programmer',
                        1000,
                        "I am Engineer",
                        1000
                    ]}
                    />
            </h3>
</div>

            
            <a href="https://drive.google.com/uc?export=download&id=1dB2Y1cU1Eyj_E8vKB6w2v9omybtDDud1" target="blank" class="mt-4 downloadCV btn btn-warning">
             Download Resume</a>
            
                {/* <i class="fas faDownload">&nbsp;</i> */}
            </div>
          
        </div>
    );
};

export default Home;