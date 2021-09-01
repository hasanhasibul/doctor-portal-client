import React from 'react';

const SingleDoctor = ({doctor}) => {
    console.log(doctor);
    return (
        <div className="col-md-4 p-4">
            <div className="doctorImage">
                <img className="img-fluid" src={`data:image/jpeg;base64,${doctor.image.img}`} alt="" />
            </div>
            <div className="doctorContent p-4 ">
                <h5 style={{color:'#1CC7C1'}} className="text" > Dr. {doctor.name}</h5>
                <h6>{doctor.email}</h6>
            </div>
        </div>
    );
};

export default SingleDoctor;