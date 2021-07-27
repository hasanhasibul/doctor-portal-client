import React from 'react';
import LeftSideBar from '../LeftsideBar/LeftSideBar';
import DashboardInfocard from './DashboardInfocard';

const DashboardMain = () => {
    const allInfo = [
        {
            title: 'Opening hours',
            count: 7,
            background: 'primary'
        },
        {
            title: 'Visit Our Location',
            count: 9,
            background: 'Black'
        },
        {
            title: 'Contact Us',
            count: 8,
            background: 'primary'
        },
        {
            title: 'Contact Us',
            count: 10,
            background: 'primary'
        }
    ]
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
                <div className="recentAppointment row">
                    
                </div>
            </div>
        </div>
    );
};

export default DashboardMain;