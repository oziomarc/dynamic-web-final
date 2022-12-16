import React from "react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import LetterPost from "../components/LetterPost";
import { getFirestore, collection, getDocs } from "firebase/firestore"

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
        if(!isLoggedIn && !isLoading) navigate('/dashboard');
    }, [isLoggedIn, isLoading, navigate])

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
                    <div className="lettersWrapper">
                        <div className="dashPageWrapper">
                            {letterData.map((letter) => (
                            <LetterPost
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