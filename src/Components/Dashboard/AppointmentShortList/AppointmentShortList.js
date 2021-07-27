import React, { useEffect, useState } from 'react';
import LeftSideBar from '../LeftsideBar/LeftSideBar';

const AppointmentShortList = () => {
    const [allAppointments, setAllAppointments] = useState([]);
    const containerStyle = {
        backgroundColor: "#F4FDFB",
    }

    useEffect(() => {
        fetch('https://limitless-wave-39623.herokuapp.com/allAppointments')
            .then(res => res.json())
            .then(appointments => {
                setAllAppointments(appointments);
            })
    }, []);
    console.log(allAppointments);
    return (
        <div style={containerStyle} >
            <div className="row">
                <div className="col-md-3">
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className="col-md-9">
                    <h2>All Appointments</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">SR.NO</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Email</th>
                                <th scope="col">Weight</th>
                                <th scope="col">Date</th>
                                <th scope="col">Contact</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                allAppointments.map((allApp, index) => 
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{allApp.name}</td>
                                        <td>{allApp.age}</td>
                                        <td>{allApp.gender}</td>
                                        <td>{allApp.email}</td>
                                        <td>{allApp.weight}</td>
                                        <td>{new Date(allApp.appointmentDate).toDateString()}</td>
                                        <td>{allApp.phone}</td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AppointmentShortList;