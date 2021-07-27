import React from 'react';
import './Appointment.css';
import doctor from '../../../images/5790-removebg.png';
const Appointment = () => {
    return (
        <section className="d-flex justify-content-center appointmentSection  text-white">
           <div className="row w-75 appointmentContainer">
               <div className="col-md-6 doctor">
                    
               </div>
               <div className="col-md-6 d-flex align-items-center">
                   <div className=" text-white">
                   <h6>Appointments</h6>
                   <h2>Make An Appointments Today</h2>
                   <small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id est soluta ducimus ipsa omnis excepturi illum assumenda. A, error beatae! </small>
                   <button class="btn btn-primary">Learn More</button>
                   </div>
               </div>
           </div>
        </section>
    );
};

export default Appointment;