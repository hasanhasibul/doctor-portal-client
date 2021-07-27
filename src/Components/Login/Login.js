import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.confiq';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import NavBar from '../Home/NavBar/NavBar';

firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [login, setLogin] = useContext(userContext);
    const provider = new firebase.auth.GoogleAuthProvider();


    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const hangleGoogleSingIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                const { displayName, email, photoURL } = user;
                console.log(displayName, email, photoURL);

                const newLogin = {
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    success: true
                }

                setLogin(newLogin);
                // ...
                history.replace(from);
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }
    return (

        <div className="container" >
            <NavBar></NavBar>
            <h2>Login</h2>
            <button onClick={hangleGoogleSingIn} className="btn btn-primary">Google Sing In</button>
            {
                login.success && <span className="text-primary">Login succesfully</span>
            }
        </div>
    );
};

export default Login;