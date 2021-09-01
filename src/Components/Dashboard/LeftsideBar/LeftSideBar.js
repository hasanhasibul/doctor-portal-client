import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './LeftSideBar.css'
import { userContext } from '../../../App';
const LeftSideBar = () => {
const [login, setLogin] = useContext(userContext);
const [isDoctor , setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('https://limitless-wave-39623.herokuapp.com/isDoctor',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email:login.email})
        })
        .then(response => response.json())
        .then(data =>{
            setIsDoctor(data)
        })
    },[])    
    return (
        <div className="leftSideBar">
          <li>
              <FontAwesomeIcon icon={faHome} />
              <Link className="LinkText" to="/dashboard">Dashboard</Link>
          </li>
          <li>
          <FontAwesomeIcon icon={faHome} />
              <Link className="LinkText" to="/appointments">Appointments</Link>
          </li>
          {/* { isDoctor &&  */}
           <div>
               <li>
          <FontAwesomeIcon icon={faHome} />
              <Link className="LinkText" to="/allPatients">Patients</Link>
          </li>
          <li>
          <FontAwesomeIcon icon={faHome} />
              <Link className="LinkText" to="/dashboard">Pascrptions</Link>
          </li>
          <li>
          <FontAwesomeIcon icon={faHome} />
              <Link className="LinkText" to="/addDoctor">Add Doctor</Link>
          </li>
            <div style={{height:'250px'}} ></div>
          <li>
          <FontAwesomeIcon icon={faHome} />
              <Link className="LinkText" to="/dashboard">Setting</Link>
          </li>
           </div>
          {/* } */}
        </div>
    );
};

export default LeftSideBar;