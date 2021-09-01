import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="container footer-container p-4 ">
            <div className="row pt-4 pb-4">
                <div className="col-md-3">
                    <div className=" footer footer-1" >
                            <ul className=" list-item pt-4 " >
                                <li>Emergency Dental Care</li>
                                <li>Check Up</li>
                                <li>Treatment of Personal Diseases</li>
                                <li>Tooth Extraction</li>
                                <li>Tooth Whitening </li>
                            </ul>
                    </div>
                </div>
                <div className="col-md-3">
                <div className=" footer footer-2" >
                        <h3 className="text text-center pb-2" >Services</h3>
                            <ul className=" list-item ">
                                <li>Emergency Dental Care</li>
                                <li>Check Up</li>
                                <li>Treatment of Personal Diseases</li>
                                <li>Tooth Extraction</li>
                                <li>Tooth Whitening </li>
                            </ul>
                    </div>
                </div>
                <div className="col-md-3">
                <div className=" footer footer-3" >
                <h3 className="text text-center pb-2">Oral Healths</h3>
                            <ul className=" list-item ">
                                <li>Emergency Dental Care</li>
                                <li>Check Up</li>
                                <li>Treatment of Personal Diseases</li>
                                <li>Tooth Extraction</li>
                                <li>Tooth Whitening </li>
                            </ul>
                    </div>
                </div>
                <div className="col-md-3">
                <div className=" footer footer-4" >
                <h3  className="text text-center  pb-2">Our Address</h3>
                            <ul className=" list-item ">
                                <li>Mirpur-1,Dhaka, Bangladesh</li>
                                <li> <i class="fa fa-facebook social-icons " aria-hidden="true"></i> <i class="fa fa-instagram social-icons" aria-hidden="true"> </i>  <i class="fa fa-linkedin social-icons" aria-hidden="true"></i></li>
                            </ul>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:'#464F62'}} className="row  p-4">
                <div className="col-md-2"></div>
                <div className="col-md-8 text-white text-center">
                    <span>@Copyright 2021 || All Rights Reserve</span>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
};

export default Footer;