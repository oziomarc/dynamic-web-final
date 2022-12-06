import React from "react";
import { useNavigate } from "react-router";
import { useEffect, useCallback, useState } from "react";
import Header from "../components/Header";
import CreatepostForm from "../components/CreatepostForm";

function Createpost({isLoading, isLoggedIn, userInfo, setIsLoggedIn, setUserInfo}) {
    const navigate = useNavigate()
    const [errors, setErrors] = useState();

    useEffect(() => {
        if(isLoggedIn && isLoading) navigate('/create');
    }, [isLoggedIn, isLoading, navigate])

    const sendPost = useCallback((e) => {
        e.preventDefault();
        
    }, [setErrors, setIsLoggedIn, setUserInfo])

    return (
        <>
            <Header
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn}
                setUserInfo={setUserInfo}
                userInfo={userInfo}
            />
            <div className="pageWrapper">
                <h1>Create a Post</h1>
                <div>
                    <CreatepostForm sendPost={sendPost}/>
                    <div className="stamps">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Createpost