import React from 'react';
import image from '../../../image/1111.PNG'
import image1 from '../../../image/2222.png'
import image2 from '../../../image/3333.png'
import './Project.css'
import {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Project = () => {

useEffect(() =>{
    Aos.init({duration:2000})
}, [])

    return (
        <div className=" ">

                   <div className="row project justify-content-center">
                   <h1 className="text-warning mt-5">Project</h1>
                    <div data-aos="flip-right" className="col-md-3 card card-1 m-3 warpper border border-warning bg-dark text-white ">
                            <h6 className="text-warning">Argentina-national-Football-Team</h6>
                          <img className="card_img " src={image} alt=""/>
                          <p className="mt-3 "><small>Argentina-national-Football-Team-Demo.
                           • Player Clicked show sidebar player name and price.
                           • 2nd Player Clicked show sidebar player name and price and
                            show total player. </small></p>
                          <a href="https://stupefied-albattani-b2a4d3.netlify.app/" rel="noreferrer" target="blank" className="m-2 click  border border-warning btn btn-dark">
                        <i className="fas fa-download">&nbsp;</i>Live</a>
                        
                        
                            <a href="https://github.com/Md-Sujon/Argentina-national-Football-Team" rel="noreferrer" target="blank" className="m-2 click border border-warning btn btn-dark">
                        <i className="fas fa-download">&nbsp;</i>Code</a>
                        </div>
        
                    <div data-aos="flip-right" className="col-md-3 card m-3 card-1 warpper border border-warning bg-dark text-white">
                    <h6 className="text-warning">AlifaOnline-Shop</h6>
                    <img className="card_img" src={image1} alt=""/>
                          <p className="mt-3"><small>This is a demo e-commerce Online-shop.
                          • Admin Panel work(Add New Product, Delete Product)
                           • Click product Firebase authentication login.
                             </small></p>
                           <a href="https://alifaonline-shop.web.app/" rel="noreferrer" target="blank" className="m-2 click border border-warning btn btn-dark">
                        <i className="fas fa-download">&nbsp;</i>Live</a>
                        
                        
                            <a href="https://cutt.ly/nbjeLR0" rel="noreferrer" target="blank" className="m-2 border border-warning click  btn btn-dark">
                        <i className="fas fa-download">&nbsp;</i>Code</a>
                        </div>
        
                    <div data-aos="flip-right" className="col-md-3 card border border-warning bg-dark text-white m-3 card-1 warpper">
                    <h6 className="text-warning">Computer-Bangladesh</h6>
                    <img className="card_img" src={image2} alt=""/>
                          <p className="mt-3"><small>This Educational Demo-website.
                          • User Dashboard ( Booking, Payment Confirm, Review)
                          • Admin Panel (Add Service, Make New Admin, Delete Service)</small></p>
                         <a href="https://computer-bangladesh.web.app/" rel="noreferrer" target="blank" className="m-2 click border border-warning btn btn-dark">
                        <i className="fas fa-download">&nbsp;</i>Live</a>
                        
                        
                            <a href="https://github.com/Md-Sujon/Computer-Bangladesh" rel="noreferrer" target="blank" className=" m-2 border border-warning click btn btn-dark">
                        <i className="fas fa-download">&nbsp;</i>Code</a>
                       </div>
                    
                    
                   </div>


            
        </div>
    );
};

export default Project;