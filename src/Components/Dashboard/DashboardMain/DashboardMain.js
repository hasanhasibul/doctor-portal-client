import React, { useEffect, useState } from 'react';
import LeftSideBar from '../LeftsideBar/LeftSideBar';
import DashboardInfocard from './DashboardInfocard';
import Appointment from './../../Home/Appointment/Appointment';

const DashboardMain = () => {
    const [Appointment, setAppoitment] = useState([]);
    const allInfo = [
        {
            title: 'Pending Appointment',
            count: 7,
            background: '#f1536e'
        },
        {
            title: "Today's Appointments",
            count: 9,
            background: '#3da5f4'
        },
        {
            title: 'Total Appointments',
            count: Appointment.length,
            background: '#00c689'
        },
        {
            title: 'Total Patients ',
            count: Appointment.length,
            background: '#fda006'
        }
    ]

    useEffect(() => {
        fetch('https://limitless-wave-39623.herokuapp.com/allAppointments')
            .then((response) => response.json())
            .then((data) => {
                setAppoitment(data)
            })
    }, [])

    return (
        <div style={{ backgroundColor: '#F4FDFB' }} className="row">
            <div className="col-md-3">
                <LeftSideBar></LeftSideBar>
            </div>
            <div className="col-md-9">
                <div className=" row w-100 p-4">
                    {
                        allInfo.map(info => <DashboardInfocard info={info}></DashboardInfocard>)
                    }
                </div>
                <div className="recentAppointment">
                    <h2>Recent Appointments</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">SR.NO</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Date</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Prescription</th>
                                <th scope="col">Action</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                Appointment.map((allApp, index) =>
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{allApp.name}</td>
                                        <td>{allApp.age}</td>
                                        <td>{allApp.gender}</td>
                                        <td>{new Date(allApp.appointmentDate).toDateString()}</td>
                                        <td>{allApp.phone}</td>
                                        <td>
                                            <button className="btn btn-primary"> View</button>
                                        </td>
                                        <td>
                                            <select class="custom-select">
                                                <option selected>Select</option>
                                                <option  value="Pending">Pending</option>
                                                <option  value="Approved">Approved</option>
                                                <option value="Cancelled">Cancelled</option>
                                            </select>
                                        </td>

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

export default DashboardMain;