import React from 'react';

const ServicesCard = ({services}) => {
    return (
        <div className="col-md-4">
            <div className="text-center">
                <img style={{ height:"50px"}} src={services.image} alt="" />
                <h3 style={{color:"#3A4256"}} className="mt-3 mb-3">{services.name}</h3>
                <p className="text-secondary"> {services.description} </p>
            </div>
        </div>
    );
};

export default ServicesCard;