import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import letter1 from "../letter-img-1.png"
import letter2 from "../letter-img-2.png"
import letter3 from "../letter-img-3.png"

function Landing({isLoading, isLoggedIn, userInfo, setIsLoggedIn, setUserInfo}) {
    const navigate = useNavigate()

    useEffect(() => {
        if(!isLoggedIn && isLoading) navigate('/');
    }, [isLoggedIn, isLoading, navigate])

    return (
        <>
            <div className="pageWrapper">
                <h1>Carta</h1>
                <h6>discover one another</h6>
                <div className="buttonContainer">
                    <Link to="/login">
                        <button className="landingButton" type="button">
                            Log In
                        </button>
                    </Link>
                    <Link to="/sign-up">
                        <button className="landingButton" type="button">
                            Sign Up
                        </button>
                    </Link>
                </div>
                <div className="hero-images">
                    <img id="img1" src={letter1} style={{ width: 660, height: 888 }} alt=" icon" />
                    <img id="img2" src={letter2} style={{ width: 660, height: 888 }} alt=" icon" />
                    <img id="img3" src={letter3} style={{ width: 660, height: 888 }} alt=" icon" />
                </div>
            </div>
        </>
    )
}

export default Landing