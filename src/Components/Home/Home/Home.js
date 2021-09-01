import React from 'react';
import Footer from '../../SharedComponent/Footer/Footer';
import Appointment from '../Appointment/Appointment';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import ExpectationDental from '../ExpectationDental/ExpectationDental';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import ServicesContainer from '../Services/ServicesContainer/ServicesContainer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServicesContainer></ServicesContainer>
            <ExpectationDental></ExpectationDental>
            <Appointment></Appointment>
            <Reviews></Reviews>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;