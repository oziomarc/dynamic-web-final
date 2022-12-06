import React from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Header from "../components/Header";

function Dashboard({isLoading, isLoggedIn, userInfo, setIsLoggedIn, setUserInfo}) {
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
                <h1>Dashboard</h1>
            </div>
        </>
    )
}

export default Dashboard