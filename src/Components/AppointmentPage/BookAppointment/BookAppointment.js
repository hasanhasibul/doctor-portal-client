import React from 'react';
import BookingCard from '../BookigCard/BookingCard';

const BookAppointment = ({ selectedDate }) => {
    const BookingData = [
        {
            id: 1,
            subject: 'Teeth whitening',
            visitHours: '10.30 - 12.30',
            totalSoace: 10

        },
        {
            id: 2,
            subject: 'Cosmetice Desnsitry',
            visitHours: '10.30 - 12.30',
            totalSoace: 10

        },
        {
            id: 3,
            subject: 'Teeth Cleaning',
            visitHours: '10.30 - 12.30',
            totalSoace: 10

        },
        {
            id: 4,
            subject: 'Teeth Orthodonstic',
            visitHours: '10.30 - 12.30',
            totalSoace: 10

        },
        {
            id: 5,
            subject: 'Teeth whitening',
            visitHours: '10.30 - 12.30',
            totalSoace: 10

        },
        {
            id: 6,
            subject: 'Teeth whitening',
            visitHours: '10.30 - 12.30',
            totalSoace: 10

        }
    ]
    return (
        <section >
            <h2 style={{ color: '#1cc7c1' }} className="text-center">Available Booking on {selectedDate.toDateString()}</h2>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-3">
                    {
                        BookingData.map(booking => <BookingCard key={booking.id} selectedDate={selectedDate} booking={booking} ></BookingCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookAppointment;