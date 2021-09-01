import React from 'react';
import LeftSideBar from '../LeftsideBar/LeftSideBar';

const Pescription = () => {
    return (
        <div className="row" >
            <div className="col-md-3">
                <LeftSideBar></LeftSideBar>
            </div>
            <div className="col-md-9">
                Pescriptions
            </div>
        </div>
    );
};

export default Pescription;