import React, { useState } from 'react';
import BookingModal from '../AppointmentPage/BookingModal/BookingModal';
import './BookingCard.css'
const BookingCard = ({ booking ,selectedDate }) => {

    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
  
    function closeModal(){
      setIsOpen(false);
    }

    return (
        <div className="col-md-4">
            <div className="mb-3">
                <div className="card text-center bookingCard">
                    <div className="card-body">
                        <h5 className="card-title text-brand">{booking.subject}</h5>
                        <h6 className="card-text text-secondary ">{booking.visitHours}</h6>
                        <p className="card-text"> available Space : {booking.totalSoace}</p>
                        <button onClick={openModal} class="btn text-white button-brand">Book Appointment</button>
                        <BookingModal date={selectedDate} booking={booking} modalIsOpen={modalIsOpen} closeModal={closeModal} ></BookingModal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;