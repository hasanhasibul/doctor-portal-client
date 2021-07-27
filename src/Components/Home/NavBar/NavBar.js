import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light ">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul class="navbar-nav  ml-auto">
                        <li class="nav-item active">
                        <Link to="/" class="nav-link mr-5 " >Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/dashboard" class="nav-link mr-5 " >Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5" href="#">Dental Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5 text-white" href="#">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5 text-white" href="#">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5 text-white" href="#">Contact us</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;