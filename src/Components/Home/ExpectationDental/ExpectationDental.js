import React from 'react';
import babyPic from '../../../images/Mask Group 3.png';
const ExpectationDental = () => {
    return (
        <section className="expectationContainer d-flex justify-content-center mt-3 mb-5">
            <div className="row w-75 ">
                <div style={{weight:'250px'}} className="col-md-5">
                    <img style={{weight:'100%'}} className="img-fluid" src={babyPic} alt="" />
                </div>
                <div className="col-md-7 mt-5 ">
                    <h2 style={{fontSize:"35px"}} >Expectation Dantal <br /> Care,On Your Turms</h2>
                    <small className="text-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nobis eligendi deserunt commodi magnam voluptatibus at necessitatibus doloribus ipsam voluptatum similique corrupti reprehenderit, laboriosam pariatur reiciendis quam atque eum labore. </small>
                    <button className="btn btn-primary mt-3">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default ExpectationDental;