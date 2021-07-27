import React from 'react';

const SingleDoctor = ({doctor}) => {
    console.log(doctor);
    return (
        <div className="col-md-4">
            <div className="doctorImage">
                <img width="300px" height="400px" src={`data:image/jpeg;base64,${doctor.image.img}`} alt="" />
            </div>
            <div className="doctorContent">
                <h5>{doctor.name}</h5>
            </div>
        </div>
    );
};

export default SingleDoctor;