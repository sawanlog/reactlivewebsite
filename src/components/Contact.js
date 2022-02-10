import React from 'react';
import Nav from './Nav';
import Footer from "./Footer";

const Contact = () => {
    return (
    <>
            <div className="header">
        <div className="container">
        <br/>
            <a href="http://192.168.2.193:3002/"><img src="img/dslogo.png"  alt="DS Canteen"/></a>
            <Nav />
        </div>
    </div>


    <section className="page-heading">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Contact Us</h1>
                    <p>Whatever drinking vinegar hella fingerstache shoreditch kickstarter kitsch. La croix hella iceland flexitarian letterpress.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="contact-us">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-heading">
                        <h2>Message</h2>
                    </div>
                    <form id="contact" action="" method="post">
                        <div className="row">
                            <div className="col-md-6">
                                <fieldset>
                                    <input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required/>
                                </fieldset>
                                <fieldset>
                                    <input name="email" type="text" className="form-control" id="email" placeholder="Your email..." required/>
                                </fieldset>
                                <fieldset>
                                    <input name="phone" type="text" className="form-control" id="phone" placeholder="Your phone..." required/>
                                </fieldset>
                            </div>
                            <div className="col-md-6">
                                <fieldset>
                                    <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your message..." required></textarea>
                                </fieldset>
                                <fieldset>
                                    <button type="submit" id="form-submit" className="btn">Send Message</button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <div className="col-md-6">
                    <div className="section-heading contact-info">
                        <h2>Contact Info</h2>
                         </div>
                </div> */}
            </div>
        </div>
    </section>

{/* 
    <section className="map">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div id="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14233.83505328953!2d75.84172078164634!3d26.88893183614188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6f25a2a4411%3A0x19fcf01ff5428a54!2sDotsquares%20Technologies%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1641378567150!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
                        
                    </iframe>
                     </div>
                </div>
            </div>
        </div>
    </section> */}


<Footer />
        </>
    )
}

export default Contact
