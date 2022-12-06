import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import CreateUserForm from "../components/SignUpForm";

function Landing({isLoading, isLoggedIn, userInfo, setIsLoggedIn, setUserInfo}) {
    const navigate = useNavigate()

    useEffect(() => {
        if(!isLoggedIn && isLoading) navigate('/');
    }, [isLoggedIn, isLoading, navigate])

    return (
        <>
            <div className="pageWrapper">
                <h1>Carta</h1>
                <h6>discover another</h6>
                <div className="buttonContainer">
                    <Link to="/login">
                        <button type="button">
                            Log In
                        </button>
                    </Link>
                    <Link to="/sign-up">
                        <button type="button">
                            Sign Up
                        </button>
                    </Link>
                </div>
                <div className="hero-images">
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
            </div>
        </>
    )
}

export default Landing