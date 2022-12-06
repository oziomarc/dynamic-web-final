import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import SignUpForm from "../components/SignUpForm";

function Signup({setIsLoggedIn, setUserInfo, isLoggedIn}) {
    const [errors, setErrors] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        if(isLoggedIn) navigate('/dashboard');
    }, [isLoggedIn, navigate])

    const signUpUser = useCallback (
        (e) => {
            e.preventDefault();

            const email = e.currentTarget.email.value;
            const password = e.currentTarget.password.value;
            const displayName = e.currentTarget.displayName.value;

            const auth = getAuth();

            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                const user = userCredential.user;
                setIsLoggedIn(true)

                setErrors()

                updateProfile (user, { displayName: displayName })
                    .then(() => {
                        setUserInfo({
                            email: user.email,
                            displayName: displayName,
                            uid: user.uid,
                            accessToken: user.accessToken,
                        })
                    })
                    .catch((err) => {
                        const errorCode = errors.code;
                        const errorMessage = errors.message;
                        console.warn({ errors, errorCode, errorMessage})
                        setErrors(errorMessage);
                    })
            })
            .catch((errors) => {
                const errorCode = errors.code;
                const errorMessage = errors.message;
                console.warn({ errors, errorCode, errorMessage})
                setErrors(errorMessage);
            });
        },
        [setErrors, setIsLoggedIn, setUserInfo]
    );

    return (
        <>
            
            <div className="pageWrapper">
                <h1>Carta</h1>
                <h6>discover another</h6>
                <h1>Sign Up</h1>
                <SignUpForm signUpUser={signUpUser}/>
                <p>{errors}</p>
            </div>
        </>
    )
}

export default Signup