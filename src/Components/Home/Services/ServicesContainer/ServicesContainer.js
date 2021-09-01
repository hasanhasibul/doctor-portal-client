import React from 'react';
import flourite from '../../../../images/001-dental.png';
import Cavity from '../../../../images/tooth (1).png';
import Whitening from '../../../../images/tooth.png';
import ServicesCard from '../ServicesCard/ServicesCard';
const ServicesContainer = () => {
    const servicesData = [
        {
            name: 'Flourite Treatment',
            image: flourite,
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, veritatis. '
        },
        {
            name: 'Cavity Fillings ',
            image: Cavity,
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, veritatis. '
        },
        {
            name: 'Teeth Whitening',
            image: Whitening,
            description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, veritatis. '
        }
    ]
    return (
        <section id="services" className='services-container mt-5 mb-5'>
            <div className="text-center ">
                <h4 style={{color: '#1cc7c1'}} className="mt-3 mb-3">Services</h4>
                <h2>Services We Provide</h2>
            </div>

            <div className="services-details d-flex justify-content-center mt-5 pt-5">
                <div className="row w-75">
                    {
                        servicesData.map(services => <ServicesCard services={services}></ServicesCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ServicesContainer;