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
                    <p><strong>Hello, </strong>{userInfo.displayName}</p>
                    <p>{formattedDate.toLowerCase()}</p>
                    <p>{formattedTime}</p>
                    {isLoggedIn && <a href="/"><button onClick={() => logOut()}>sign out</button></a>}

                    {isLoggedIn && <a href="/dashboard"><button>dashboard</button></a>}
                    <a href="/create"><button>create</button></a>
                    <a href="/me"><button>user</button></a>
                    
                </nav>
            </header>
        </>
        
    )
}

export default Header;