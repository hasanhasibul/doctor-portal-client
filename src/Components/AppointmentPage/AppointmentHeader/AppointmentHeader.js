import React from 'react';
import chair from '../../../images/Mask Group 1.png';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = (props) => {
    return (
        <main className="row mainContent d-flex align-items-center">

            <div className="col-md-4 offset-1">
                <h2 className="headerTwo">Appointment</h2>
                <Calendar
                    onChange={props.handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6 ">
                <img src={chair} className="img-fluid" alt="" />
            </div>

        </main>
    );
};

export default AppointmentHeader;