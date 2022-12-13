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
                <div className="profilePage">
                    <p>{userInfo.displayName}'s letters:</p>
                    <div className="lettersWrapper"></div>
                    <p>{userInfo.displayName}'s likes:</p>
                    <div className="likesWrapper"></div>
                </div>
                
            </div>
        </>
    )
}

export default Profile