import React from 'react';
import './HeaderMain.css';
import chair from '../../../images/Mask Group 1.png';
import { Link } from 'react-router-dom';
const HeaderMain = () => {
    return (
        <main className="row mainContent d-flex align-items-center">

            <div className="col-md-4 offset-1">
                <h2 className="headerTwo">Your new smile <br /> start here</h2>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tenetur unde nostrum adipisci a quibusdam.</p>
                <Link to="/appointment"><button class="btn btn-primary">GET APPOINTMENT</button></Link>
            </div>
            <div className="col-md-6 ">
                <img src={chair} className="img-fluid" alt="" />
            </div>

        </main>
    );
};

export default HeaderMain;