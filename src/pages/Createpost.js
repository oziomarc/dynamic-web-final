import React from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Header from "../components/Header";

function Createpost({isLoading, isLoggedIn, userInfo, setIsLoggedIn, setUserInfo}) {
    const navigate = useNavigate()

    useEffect(() => {
        if(!isLoggedIn && !isLoading) navigate('/login');
    }, [isLoggedIn, isLoading, navigate])

    return (
        <>
            
            <div className="pageWrapper">
                
            </div>
        </>
    )
}

export default Createpost