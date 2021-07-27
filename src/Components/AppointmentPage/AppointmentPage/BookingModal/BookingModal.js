import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './BookigModal.css'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')

const BookingModal = ({ modalIsOpen, closeModal, booking,date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.appointmentName=booking;
        data.appointmentDate = date;
        data.appointmentDay =  new Date();

        fetch('https://limitless-wave-39623.herokuapp.com/addAppointment',{
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success =>{
            if(success){
                closeModal();
                alert("appointment succesfully")
            }
        })
        
    };
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div className=" p-3">
                <h2 className="text-brand text-center">{booking.subject}</h2>
                <p className="text-secondary text-center"> <small>On {date.toDateString()}</small> </p>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <input type="text" placeholder="Your Name" name="name" className="form-control"{...register("name", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="phone" placeholder="Your Number" name="phone" className="form-control"{...register("phone", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.phone && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" name="email" className="form-control"{...register("email", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.email && <span className="text-danger" >This field is required</span>}
                    </div>

                    <div className="form-group row">
                        <div className="col-md-4">
                            <select className="form-control" name="gender" id="gender" {...register("gender", { required: true })}>
                            <option disabled={true} value="Not set">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">others</option>
                            </select> 
                            {errors.gender && <span className="text-danger">This field is required</span>}  
                        </div>

                        <div className="col-md-4">
                        <input type="number" placeholder="Age" name="age" className="form-control"{...register("age", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.age && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="col-md-4">
                        <input type="number" placeholder="Weight" name="weight" className="form-control"{...register("weight", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>

                    </div>

                    <input className="btn button-brand text-white" type="submit" />
                </form>
                </div>
            </Modal>
        </div>
    );
};

export default BookingModal;