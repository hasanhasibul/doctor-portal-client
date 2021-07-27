import React from 'react';
import LeftSideBar from '../LeftsideBar/LeftSideBar';
import DoctorForm from './DoctorForm';

const AddDoctor = () => {
    return (
        <section className=" container-flued row">
            <div className="col-md 3">
                <LeftSideBar></LeftSideBar>
            </div>
            <div className="col-md-9">
                <h2>Add Doctor</h2>
                <DoctorForm></DoctorForm>
            </div>
        </section>
    );
};

export default AddDoctor;