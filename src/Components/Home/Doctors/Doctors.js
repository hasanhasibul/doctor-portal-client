import React, { useEffect, useState } from 'react';
import SingleDoctor from './SingleDoctor/SingleDoctor';

const Doctors = () => {
    const [doctor,setDoctor] = useState([]);
    useEffect(() => {
        fetch('https://limitless-wave-39623.herokuapp.com/doctors')
        .then(response => response.json())
        .then(data =>{
            setDoctor(data);
        })
    },[])

    if(!doctor){
        return "Loading...."
    }
    return (
        <div id="doctors" className="container text-center p-4">
            <h2 className="text fw-bold" >Our Doctors</h2>
            <div className="row p-4">
                {
                    doctor.map(dt => <SingleDoctor doctor  = {dt}></SingleDoctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;