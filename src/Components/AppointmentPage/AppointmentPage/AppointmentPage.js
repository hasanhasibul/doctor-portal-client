import React, { useState } from 'react';
import NavBar from '../../Home/NavBar/NavBar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const AppointmentPage = () => {
    const [selectedDate,setSeletedDate] = useState(new Date());
    const handleDateChange = date => {
        setSeletedDate(date)
    }
    return (
        <section>
            <NavBar></NavBar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment selectedDate={selectedDate}></BookAppointment>
        </section>
    );
};

export default AppointmentPage;