import React from "react";
import { useNavigate } from "react-router";
import { useEffect, useCallback, useState } from "react";
import Header from "../components/Header";
import CreatepostForm from "../components/CreatepostForm";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

function Createpost({app, isLoading, isLoggedIn, userInfo, setIsLoggedIn, setUserInfo}) {
    const navigate = useNavigate()
    const [errors, setErrors] = useState();

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
        const author = userInfo.displayName;
        const userId = userInfo.uid;

        try {
            // uploadBytes(imageRef, imageToUpload)
            // .then((snapshot) => {
            //     // console.log(snapshot)
            //     return snapshot;
            // })

            const docRef = await addDoc(collection(db, "letters"), {
                letterText,
               // stampUrl,
                author,
                userId: userId
            });
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