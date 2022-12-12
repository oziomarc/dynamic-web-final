import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Header from "../components/Header";
import { getFirestore, collection, getDocs } from "firebase/firestore"

const queryData = async (app) => {
    if(!app) return [];
    const db = getFirestore(app); 
    const querySnapshot = await getDocs(collection(db, "letters"))
    const data = []
    querySnapshot.forEach((doc) => {
        data.push(doc.data())
    });
    return data;
}

function Dashboard({app, isLoading, isLoggedIn, userInfo, setIsLoggedIn, setUserInfo}) {
    const navigate = useNavigate()
    const [letterData, setLetterData] = useState([])

    useEffect(() => {
        if(!isLoggedIn && !isLoading) navigate('/dashboard');
    }, [isLoggedIn, isLoading, navigate])

       
    

    useEffect(() => {
        if(!app) return;
        queryData(app).then(setLetterData)
    },[app])

    console.log({letterData})

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
                {letterData.map}
            </div>
        </>
    )
}

export default Dashboard