import React from 'react';
import emailjs from "emailjs-com";

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'sujon-mail', e.target, 'user_KZw6WHH1k447y1kQqWsCT')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
        <div className="bg-dark">
            <div className="container ">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-primary" value="Send Message"></input>
                        </div>
                    </div>

<div className="row text-white justify-content-center mt-5">
    <div className="col-md-3 border border-success">
        <h4>Mobile</h4>
        <h6>01716059420</h6>
    </div>
    <div className="col-md-3 border border-success">
    <h4>Email</h4>
    <h6>mdsujon829562@gmail.com</h6>
    </div>

</div>



                </form>
               
            </div>
            
        </div>
    );
};

export default Contact;