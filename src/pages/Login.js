import React, { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import LoginForm from "../components/LoginForm.js";
import { Link } from "react-router-dom";

function LoginPage({ isLoggedIn, setIsLoggedIn, setUserInfo }) {
    const [errors, setErrors] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if(isLoggedIn) navigate('/dashboard');
    }, [isLoggedIn, navigate])

    const loginUser = useCallback((e) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            setIsLoggedIn(true)
            setUserInfo({
                email: user.email,
                displayName: user.displayName,
                uid: user.uid,
                accessToken: user.accessToken,
            });
        })
        .catch((errors) => {
            const errorCode = errors.code;
            const errorMessage = errors.message;
            console.warn({ errors, errorCode, errorMessage})
            setErrors(errorMessage);
            <p>{errors}</p>
        }); 

        // console.log({email, password})
    }, [setErrors, setIsLoggedIn, setUserInfo])

    return (
        <>
            
            <div className="pageWrapper">
                <h1>Carta</h1>
                <h6>discover one another</h6>
                <div className="loginSignup">
                    <LoginForm 
                    loginUser={loginUser}/>
                    <Link to="/">
                    </Link>
                </div>

                <p>{errors}</p>
            </div>
        </>
    )
}

export default LoginPage