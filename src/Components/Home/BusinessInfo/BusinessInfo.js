import React from 'react';
import Info from '../Info/Info';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons';
const BusinessInfo = () => {

    const allInfo = [
        {
        title: 'Opening hours',
        description:'We are open 7 days ',
        icon: faClock,
        background:'primary'
       },
       {
        title: 'Visit Our Location',
        description:'Mirpur 1 ,Dhaka , Bangladesh',
        icon: faMapMarker ,
        background:'Black'
       },
       {
        title: 'Contact Us',
        description:'+8801883202849',
        icon: faPhone,
        background:'primary'
       }
    ]

    return (
        <section className="d-flex justify-content-center" >
            <div className=" row w-75">
            {
                allInfo.map(info => <Info info={info}></Info> )
            }
            </div>
        </section>
    );
};

export default BusinessInfo;