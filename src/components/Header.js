import React from "react";
import { getAuth, signOut } from "firebase/auth"

function Header({ setIsLoggedIn, setUserInfo, isLoggedIn }) {

    const current = new Date();
    const date = current.getDate();
    const day = current.toLocaleString('en-us', {  weekday: 'long' });
    const month = current.toLocaleString('en-us', {  month: 'long' });

    const formattedDate = `${day}, ${month} ${date}`;
    const formattedTime = `${current.getHours()} : ${current.getMinutes()} : ${current.getSeconds()}`;
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
        <header>
            <nav>
                <p>{formattedDate.toLowerCase()}</p>
                <p>{formattedTime}</p>
                <a href="/landing"><p onClick={() => logOut()}>sign out</p></a>
                <a href="/dashboard"><p>dashboard</p></a>
                <a href="/create"><p>pen</p></a>
                <a href="/me"><p>user</p></a>
                
            </nav>
        </header>
        
    )
}

export default Header;