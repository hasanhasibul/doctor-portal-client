import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { userContext } from '../../App';
import LeftSideBar from './LeftsideBar/LeftSideBar';
import RightBar from './RightBar/RightBar';
const Dashboard = () => {
    const [selectedDate,setSeletedDate] = useState(new Date());
    const [appointment,setAppointment] = useState([]);
    const [login, setLogin] =  useContext(userContext);
    const handleDateChange = date => {
        setSeletedDate(date)
    }
   useEffect(() => {
    fetch('https://limitless-wave-39623.herokuapp.com/appointmentByDate',{
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({date:selectedDate,email:login.email})
    })
    .then(res => res.json())
    .then(data => {
        setAppointment(data)
    })
   },[selectedDate])

   const containerStyle = {
    backgroundColor: "#F4FDFB",
}
    return (
            <div style={containerStyle} className="row">
                <div className="col-md-3">
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className="col-md-4 p-4">
                <Calendar
                    className="bg-white"
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
                <div className="col-md-5 p-4">
                <h2>Appointment By Date </h2>
                    <RightBar appointment={appointment}></RightBar>
                </div>
            </div>
    );
};

export default Dashboard;