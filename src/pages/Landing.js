import { useNavigate } from "react-router";
import { useEffect } from "react";
import Header from "../components/Header";

function Landing({isLoading, isLoggedIn, userInfo, setIsLoggedIn, setUserInfo}) {
    const navigate = useNavigate()

    useEffect(() => {
        if(!isLoggedIn && !isLoading) navigate('/');
    }, [isLoggedIn, isLoading, navigate])

    return (
        <>
            
            <div className="pageWrapper">
                <h1>User Profile</h1>
                <p><strong>Display Name: </strong>{userInfo.displayName}</p>
                <p><strong>Email: </strong>{userInfo.email}</p>
                <p><strong>User ID: </strong>{userInfo.uid}</p>
            </div>
        </>
    )
}

export default Landing