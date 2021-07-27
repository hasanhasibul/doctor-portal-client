import React from 'react';
import './DashboardInfoCard.css';
const DashboardInfocard = ({ info }) => {
    return (
        <div className="col-md-3 info-card" >
            <div className={`infoContainer text-white d-flex info-${info.background}`}>
                <div className="infoIcon mr-3">
                    <h4>{info.count}</h4>
                </div>
                <div className="">

                    <h4>{info.title}</h4>
                </div>
            </div>
        </div>
    );
};

export default DashboardInfocard;