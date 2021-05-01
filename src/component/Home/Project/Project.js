import React from 'react';
import image from '../../../image/11.PNG'
import image1 from '../../../image/22.PNG'
import image2 from '../../../image/33.PNG'
import './Project.css'

const Project = () => {
    return (
        <div className="row project justify-content-center bg-dark">
                    <h1 className="text-light mt-3">Project</h1>
            <div className="col-md-3 card card-1 m-3">
                    <h6 className="text-primary">Argentina-national-Football-Team</h6>
                  <img src={image} alt=""/>
                  <p className="mt-3"><small>Argentina-national-Football-Team-Demo.
                   • Player Clicked show sidebar player name and price.
                   • 2nd Player Clicked show sidebar player name and price and
                    show total player. </small></p>
                  <a href="https://stupefied-albattani-b2a4d3.netlify.app/" rel="noreferrer" target="_blank" className="m-2 click btn btn-primary">
                <i className="fas fa-download">&nbsp;</i>Live</a>
                
                
                    <a href="https://github.com/Md-Sujon/Argentina-national-Football-Team" rel="noreferrer" target="_blank" className="m-2 click btn btn-primary">
                <i className="fas fa-download">&nbsp;</i>Code</a>
                </div>

            <div className="col-md-3 card m-3 card-1">
            <h6 className="text-primary">AlifaOnline-Shop</h6>
            <img src={image1} alt=""/>
                  <p className="mt-3"><small>This is a demo e-commerce Online-shop.
                  • Admin Panel work(Add New Product, Delete Product)
                   • Click product Firebase authentication login.
                     </small></p>
                   <a href="https://alifaonline-shop.web.app/" rel="noreferrer" target="_blank" className="m-2 click btn btn-primary">
                <i className="fas fa-download">&nbsp;</i>Live</a>
                
                
                    <a href="https://cutt.ly/nbjeLR0" rel="noreferrer" target="_blank" className="m-2 click btn btn-primary">
                <i className="fas fa-download">&nbsp;</i>Code</a>
                </div>

            <div className="col-md-3 card m-3 card-1">
            <h6 className="text-primary">Computer-Bangladesh</h6>
            <img src={image2} alt=""/>
                  <p className="mt-3"><small>This Educational Demo-website.
                  • User Dashboard ( Booking, Payment Confirm, Review)
                  • Admin Panel (Add Service, Make New Admin, Delete Service)</small></p>
                 <a href="https://computer-bangladesh.web.app/" rel="noreferrer" target="_blank" className="m-2 click btn btn-primary">
                <i className="fas fa-download">&nbsp;</i>Live</a>
                
                
                    <a href="https://github.com/Md-Sujon/Computer-Bangladesh" rel="noreferrer" target="_blank" className=" m-2 click btn btn-primary">
                <i className="fas fa-download">&nbsp;</i>Code</a>
               </div>
            
            


            
        </div>
    );
};

export default Project;