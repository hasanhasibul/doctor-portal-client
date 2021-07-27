import React from 'react';
import Appointment from '../Appointment/Appointment';
import Doctors from '../Doctors/Doctors';
import ExpectationDental from '../ExpectationDental/ExpectationDental';
import Header from '../Header/Header';
import ServicesContainer from '../Services/ServicesContainer/ServicesContainer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServicesContainer></ServicesContainer>
            <ExpectationDental></ExpectationDental>
            <Appointment></Appointment>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;