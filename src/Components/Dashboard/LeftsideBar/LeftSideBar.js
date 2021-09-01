import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarCheck, faCog, faNotesMedical, faUser, faAddressCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './LeftSideBar.css'
import { userContext } from '../../../App';
import { useHistory } from "react-router-dom";
const LeftSideBar = () => {
    const [login, setLogin] = useContext(userContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('https://limitless-wave-39623.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: login.email })
        })
            .then(response => response.json())
            .then(data => {
                setIsDoctor(data)
            })
    }, [])

    const history = useHistory();
    const handleLogOut = ()=>{
        
        setLogin({})
        history.push('/')
    }
    return (
        <div className="leftSideBar">
            <li>
                <FontAwesomeIcon icon={faCalendarCheck} />
                <Link className="LinkText pl-2" to="/appointments">Appointments</Link>
            </li>
            {isDoctor &&
                <div>
                    <li>
                        <FontAwesomeIcon icon={faHome} />
                        <Link className="LinkText pl-2 " to="/dashboard-main">Dashboard</Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUser} />
                        <Link className="LinkText pl-2" to="/allPatients">Patients</Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faNotesMedical} />
                        <Link className="LinkText pl-2" to="/pescription">Pascrptions</Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faAddressCard} />
                        <Link className="LinkText pl-2 " to="/addDoctor">Add Doctor</Link>
                    </li>
                    <div style={{ height: '250px' }} ></div>
                    <li>
                        <FontAwesomeIcon icon={faCog} />
                        <Link className="LinkText pl-2" to="/dashboard-main">Setting</Link>
                    </li>
                </div>
            }

            <li>
                <FontAwesomeIcon icon={faSignOutAlt} />
                <Link  onClick={handleLogOut} className="LinkText pl-2" >Log Out</Link>
            </li>
        </div>
    );
};

export default LeftSideBar;