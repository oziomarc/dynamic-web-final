import React from "react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getFirestore, collection, getDocs } from "firebase/firestore"
import UserLetters from "../components/UserLetters";

const queryData = async (app) => {
    if(!app) return [];
    const db = getFirestore(app); 
    const querySnapshot = await getDocs(collection(db, "letters"))
    const data = []
    querySnapshot.forEach((doc) => {
        const pushData = doc.data()
        data.push(pushData)
    });
    return data;
}

function Profile({app, isLoading, isLoggedIn, userInfo, setIsLoggedIn, setUserInfo}) {
    const navigate = useNavigate()

    useEffect(() => {
        if(!isLoggedIn && !isLoading) navigate('/');
    }, [isLoggedIn, isLoading, navigate])

    const [letterData, setLetterData] = useState([])

    useEffect(() => {
        if(!app) return;
        queryData(app).then(setLetterData)
    }, [app])

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
                    <div className="">
                        <div className="userLettersWrapper">
                            {userInfo && letterData.map((letter) => (
                            <UserLetters
                                letterText={letter.letterText}
                            />
                            ))}
                        </div>
                    </div>
                    <p>{userInfo.displayName}'s likes:</p>
                    <div className="likesWrapper"></div>
                </div>
                
            </div>
        </>
    )
}

export default Profile