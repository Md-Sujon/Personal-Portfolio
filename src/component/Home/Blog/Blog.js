import React from 'react';
import image  from '../../../image/111.png'
import image1  from '../../../image/222.png'
import image2  from '../../../image/333.png'

const Blog = () => {
    return (
        <div className="justify-content-center bg-dark ">
                    
            <div className="row project ">
            <h1 className="mt-5 text-warning">Blog</h1>
            <div className="col-md-3 card card-1 m-3 warpper bg-dark border border-warning text-white">
                    
                  <img className="mt-2 card_img" src={image2} alt=""/>
                  <p className="mt-3"><small>Feeling lonely? Break Your Loneliness Using Python
                        Give Voice To Your Program With Just 5 Lines Of Code and create your own story teller </small></p>
                    <a href="https://medium.com/programminghero/feeling-lonely-break-your-loneliness-using-python-5ea5e2381d98" rel="noreferrer" target="blank" className="m-2 click btn btn-dark border border-warning">
                <i className="fas fa-download">&nbsp;</i>See More</a>
                </div>

            <div className="col-md-3 card m-3 card-1 warpper bg-dark border border-warning text-white">
            
            <img className="mt-2 card_img" src={image1} alt=""/>
                  <p className="mt-3"><small>10 Python Libraries That Every Python Developer Should Learn To Boost Their Career
                     </small></p>
                    <a href="https://medium.com/programminghero/10-python-libraries-that-every-python-developer-should-learn-to-boost-their-career-649881f3a013" rel="noreferrer" target="blank" className="m-2 click btn btn-dark border border-warning">
                <i className="fas fa-download">&nbsp;</i>See More</a>
                </div>

            <div className="col-md-3 card m-3 card-1 warpper bg-dark border border-warning text-white">
            
            <img className="mt-2 card_img" src={image} alt=""/>
                  <p className="mt-3"><small>Wanna be a JavaScript Ninja, check out these 12 tips and tricks. These will make you super smart and the best developer in your team.</small></p>
                
                    <a href="https://medium.com/programminghero/12-tricks-for-new-javascript-developers-234b1a34239d" rel="noreferrer" target="blank" className=" m-2 click btn btn-dark border border-warning">
                <i className="fas fa-download">&nbsp;</i>See More</a>
               </div>
            </div>

            
        </div>
    );
};

export default Blog;