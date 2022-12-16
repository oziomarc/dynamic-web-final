import React from "react";
import { getAuth, signOut } from "firebase/auth"
import dashboardimg from "../dashboard-icon.png"
import featherimg from "../components/files/feather-icon.png"
import smileimg from "../components/files/smile-icon.png"

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
                        {isLoggedIn && <a href="/dashboard"><img id="dash-img" src={dashboardimg} style={{ width: 30, height: 30 }} alt="dashboard icon" title="dashboard"/></a>}
                        <a href="/create"><img id="feather-img" src={featherimg} style={{ width: 30, height: 30 }} alt="dashborad icon" title="create"/></a>
                        <a href="/me"><img id="smile-img" src={smileimg} style={{ width: 30, height: 30 }} alt="dashborad icon" title="profile"/></a>
                    </div>
                </nav>
            </header>
        </>
        
    )
}

export default Header;