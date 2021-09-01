import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div id="contact" className="container">

            <div className="row pt-2 contact-us pb-2 contactContainer">

                <div className="col-md-3">
                </div>

                <div className="col-md-6  pt-4 pb-4 ">
                    <div className="">
                        <div className=" p-4 text-center">
                            <div className="h4 text">CONTACT US</div>
                            <div className="h2 text-white">Always Connect With Us</div>
                        </div>
                       <div className="">
                       <form>
                            <div class="mb-3">
                                <input type="email" class="form-control" placeholder="Your Email*" required aria-describedby="emailHelp" />
                            </div>

                            <div class="mb-3">
                                <input type="text" class="form-control" placeholder="Subject* " required />
                            </div>
                            <div class="mb-3">
                            <textarea class="form-control" placeholder="Your Message*"  required rows="3"></textarea>
                            </div>
                            <div className="text-center">
                            <button type="submit" class="btn btn-primary ">Submit</button>
                            </div>
                        </form>
                       </div>
                    </div>
                </div>
                <div className="col-md-3">

                </div>
            </div>
        </div>
    );
};

export default Contact;