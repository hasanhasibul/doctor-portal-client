import React from 'react';

const RightBar = ({ appointment }) => {
    console.log(appointment);

    return (
        <table className="table table-borderless bg-white">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>
            {  appointment.length ?
                  appointment.map((appointment, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{appointment.name}</td>
                        <td>{appointment.email}</td>
                        <td>{appointment.phone}</td>
                    </tr>
                    )
                    : <h6>No Appontment Found</h6>
                }
            </tbody>
        </table>

    );
};

export default RightBar;