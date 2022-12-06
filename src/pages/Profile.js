import React from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Header from "../components/Header";

function Profile({isLoading, isLoggedIn, userInfo, setIsLoggedIn, setUserInfo}) {
    const navigate = useNavigate()

    useEffect(() => {
        if(!isLoggedIn && !isLoading) navigate('/');
    }, [isLoggedIn, isLoading, navigate])

    return (
        <>
            <Header
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn}
                setUserInfo={setUserInfo}
                userInfo={userInfo}
            />
            <div className="pageWrapper">
                <h1>User Profile</h1>
                <p><strong>Display Name: </strong>{userInfo.displayName}</p>
                <p><strong>Email: </strong>{userInfo.email}</p>
            </div>
        </>
    )
}

export default Profile