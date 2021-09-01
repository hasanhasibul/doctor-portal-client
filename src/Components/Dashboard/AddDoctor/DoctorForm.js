import React, { useState } from 'react';

const DoctorForm = () => {
    const [doctorInfo, setDoctorInfo] = useState({});
    const [doctorFile, setDoctorFile] = useState(null);
    const handleBlur = (e) => {
        const newDoctorInfo = { ...doctorInfo };
        newDoctorInfo[e.target.name] = e.target.value;
        setDoctorInfo(newDoctorInfo);
    }

    const handleChange = (e) => {
        const file = e.target.files[0];
        setDoctorFile(file);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', doctorFile);
        formData.append('name', doctorInfo.name);
        formData.append('email', doctorInfo.email);

        fetch('http://localhost:5000/addDoctors', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(success => {
                if (success) {
                    alert("Doctor Added Successfully");
                }
            })
            .catch(error => {
                console.error(error);
                alert("something wrong");
            })
    }
    return (
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" onBlur={handleBlur} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Email</label>
                <input type="email" onBlur={handleBlur} name="email" class="form-control" id="exampleInputPassword1" placeholder="email" />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">File Upload</label>
                <input type="file" onChange={handleChange} class="form-control" id="exampleInputPassword1" placeholder="file upload" />
            </div>
            <button type="submit" onClick={handleSubmit} class="btn btn-primary">Submit</button>
        </form>
    );
};

export default DoctorForm;