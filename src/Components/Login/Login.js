import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.confiq';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import NavBar from '../Home/NavBar/NavBar';
import Footer from '../SharedComponent/Footer/Footer';
import './Login.css'
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [login, setLogin] = useContext(userContext);
    const [email,setEmail] = useState('')
    const provider = new firebase.auth.GoogleAuthProvider();


    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const hangleGoogleSingIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                const { displayName, email, photoURL } = user;
                const newLogin = {
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    success: true
                }

                setLogin(newLogin);

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

    // handle login with email
    const handleBlur = (e)=>{
        setEmail(e.target.value)
    }
    
    const handleLogin = (e)=>{
        e.preventDefault()
        const newLogin = {
            email : email 
        }
        setLogin(newLogin)
        history.replace(from);
    }
    return (

        <div className="" >
            <NavBar></NavBar>

            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="login d-flex align-items-center justify-content-center" >
                        <button onClick={hangleGoogleSingIn} className="btn btn-primary login-button"> <span><i class="fa fa-google fs-base " aria-hidden="true"></i></span> Sing In With Google</button>
                        {
                            login.success && <span className="text-primary">Login succesfully</span>
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-4" >
                        <h4>Try to Demo Login as a Patient </h4>
                        <p>Email : hasibulhasan.46cse.@gmail.com</p>
                        <br />
                        <h4>Try to Demo Login as a Doctor </h4>
                        <p>Email : hasanhasibul395@gmail.com</p>
                        <p>Or You can try to create new booking and can login with your booking Email</p>
                    </div>

                    <div className="p-4" >
                        <form onSubmit={handleLogin} action="">
                            <input onBlur={handleBlur} type="email" className="form-control" placeholder="Email" />
                            <br />
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
            <br /><br />
            <Footer></Footer>
        </div>
    );
};

export default Login;