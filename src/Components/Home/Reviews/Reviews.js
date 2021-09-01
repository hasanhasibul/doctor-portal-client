import React from 'react';
import Review from './Review/Review';
import './Reviews.css'
import Ellipse1 from '../../../images/Ellipse 1.png';
import Ellipse2 from '../../../images/Ellipse 2.png';
import Ellipse3 from '../../../images/Ellipse 3.png';
const Reviews = () => {

    const testData = [
        {
            name:'Tushar Ahmed',
            title:'patient',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus mollitia blanditiis doloribus nihil cupiditate, asperiores sit quos repellat velit! Inventore.',
            img: Ellipse1
        },
        {
            name:'Hasibul Hasan',
            title:'patient',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus mollitia blanditiis doloribus nihil cupiditate, asperiores sit quos repellat velit! Inventore.',
            img: Ellipse2
        },
        {
            name:'Yasin Sarkar',
            title:'patient',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus mollitia blanditiis doloribus nihil cupiditate, asperiores sit quos repellat velit! Inventore.',
            img: Ellipse3
        }
    ]
    return (
        <div id="reviews" className="container pt-4 pb-4 " >
            <div className="row">
                <div className="col-md-6">
                    <h6 className="text p-4" >Testimonial</h6>
                    <h3 className="p-4 text-style">What Our Patient <br /> Say's</h3>
                </div>
                <div className="col-md-4">
                 
                </div>
                <div className="col-md-2">
                 <i class="fa fa-quote-left icon " aria-hidden="true"></i>
                </div>
            </div>
            <div className="row">
                {
                    testData.map((data)=> <Review data={data} ></Review> )
                }
            </div>
        </div>
    );
};

export default Reviews;