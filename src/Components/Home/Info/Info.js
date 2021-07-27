import React from 'react';
import './Info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Info = ({ info }) => {
    return (
        <div className="col-md-4 info-card" >
            <div className={`infoContainer text-white d-flex info-${info.background}`}>
                <div className="infoIcon mr-3">
                    <FontAwesomeIcon icon={info.icon} />
                </div>
                <div className="">
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default Info;