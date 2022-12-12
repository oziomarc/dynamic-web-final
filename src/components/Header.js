import React from "react";
import { getAuth, signOut } from "firebase/auth"

function Header({ isLoggedIn, userInfo, setIsLoggedIn, setUserInfo }) {
    const current = new Date();
    const date = current.getDate();
    const year = current.getFullYear()
    const day = current.toLocaleString('en-us', {  weekday: 'long' });
    const month = current.toLocaleString('en-us', {  month: 'long' });

    const formattedDate = `${day}, ${month} ${date} ${year}`;
    const formattedTime = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

    function logOut() {
        const auth = getAuth()
        signOut(auth).then(() => {
            setUserInfo({});
            setIsLoggedIn(false);
        })
        .catch((error) => {
            console.warn(error)
        })
    }
    return (
        <>
            <header>
                <nav>
                    <div className="leftnav">
                        <h3>hello, {userInfo.displayName}</h3>
                        <p>{formattedDate.toLowerCase()}</p>
                        <p>{formattedTime}</p>
                        {isLoggedIn && <a href="/"><button onClick={() => logOut()}>sign out</button></a>}
                    </div>
                    <div className="rightnav">
                        {isLoggedIn && <a href="/dashboard"><img src={require('src/files/dashboard-icon.png')} alt="dashboard icon" /></a>}
                        <a href="/create"><img src="files/feather-icon.png" alt="write icon"/></a>
                        <a href="/me"><img src="files/smile-icon.png" alt="profile icon"/></a>
                    </div>
                </nav>
            </header>
        </>
        
    )
}

export default Header;