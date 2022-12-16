import { useEffect, useState } from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {initializeApp} from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './App.css';
import Signup from './pages/Signup';
import LoginPage from './pages/Login';
import Profile from './pages/Profile';
import Dashboard from "./pages/Dashboard";
import Createpost from "./pages/Createpost";
import Landing from "./pages/Landing";

const firebaseConfig = {
  apiKey: "AIzaSyCbvOmvWwmOGqTW9QGMxnCqSU-q2qTwIhY",
  authDomain: "final-project-a7334.firebaseapp.com",
  projectId: "final-project-a7334",
  storageBucket: "final-project-a7334.appspot.com",
  messagingSenderId: "956763607467",
  appId: "1:956763607467:web:66ab9ddd2844fe5519c2ee"
};


function App() {
  const [appInitialized, setAppInitialized] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    setAppInitialized(true)
  },[]) // runs once after the first render

  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserInfo(user)
          setIsLoggedIn(true)
        } else {
          setUserInfo({})
          setIsLoggedIn(false)
        }
        setIsLoading(false)
      });
    }
  }, [appInitialized]);

  console.log({userInfo})

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing // maybe don't need this if user is logged in? 
      app={appInitialized}
        isLoading={isLoading}
        userInfo={userInfo}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInfo={setUserInfo}
      />
    },
    {
      path: "/me",
      element: <Profile 
      app={appInitialized}
        isLoading={isLoading}
        userInfo={userInfo}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInfo={setUserInfo}
      />
    },
    {
      path: "/login",
      element: <LoginPage 
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      setUserInfo={setUserInfo} />
    },
    {
      path: "/sign-up",
      element: 
        <Signup 
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInfo={setUserInfo}
        />
      ,
    },
    {
      path: "/dashboard",
      element: 
        <Dashboard 
        app={appInitialized}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInfo={setUserInfo}
        userInfo={userInfo}
        />
      ,
    },
    {
      path: "/create",
      element: 
        <Createpost 
        app={appInitialized}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInfo={setUserInfo}
        userInfo={userInfo}
        />
      ,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}/> 
    </div>
  );
}

export default App;
