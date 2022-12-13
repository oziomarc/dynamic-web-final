import React from "react";
import { useNavigate } from "react-router";
import { useEffect, useCallback, useState } from "react";
import Header from "../components/Header";
import CreatepostForm from "../components/CreatepostForm";
import { getFirestore, collection, addDoc } from "firebase/firestore";

function Createpost({app, isLoading, isLoggedIn, userInfo, setIsLoggedIn, setUserInfo}) {
    const navigate = useNavigate()
    const [postSuccessful, setPostSuccessful] = useState(false)

    useEffect(() => {
        if(isLoggedIn && isLoading) navigate('/create');
    }, [isLoggedIn, isLoading, navigate])

    const sendPost = useCallback(async (e) => {
        e.preventDefault();
        const db = getFirestore(app);

        // const storage = getStorage();
        // const imageToUpload = e.currentTarget.imageToUpload.files[0];
        // const imageRef = ref(storage, imageToUpload.name);

        const letterText = e.currentTarget.letterText.value;
        // const stampUrl = "";
        const displayName = userInfo.displayName;
        const userId = userInfo.uid;

        try {
            const docRef = await addDoc(collection(db, "letters"), {
                letterText,
               // stampUrl,
                displayName,
                userId: userId
            });
            setPostSuccessful(true)
        } catch (e) {
            console.error("error adding document: ", e);
        }
    }, [app, userInfo])

    return (
        <>
            <Header
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn}
                setUserInfo={setUserInfo}
                userInfo={userInfo}
            />
            <div className="pageWrapper">
                <div className="createPostWrapper">
                    <CreatepostForm 
                    sendPost={sendPost}
                    // letterText={letterText}
                    // displayName={displayName}
                    />
                    {postSuccessful && <p>letter posted!</p>}
                    {postSuccessful}
                    <div className="stamps"></div>
                </div>
            </div>
        </>
    )
}

export default Createpost