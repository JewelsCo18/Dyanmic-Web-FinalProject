import {Navigate, Routes, Route, BrowserRouter as Router} from 'react-router-dom'; 
import {useEffect, useState} from 'react'; 
import CreateUser from "./pages/CreateUser"; 
import Login from "./pages/Login"; 
import UserProfile from "./pages/UserProfile"; 
import Dashboard from "./pages/Dashboard"; 
import AddPost from "./pages/AddPost"; 
import Header from "./components/Header"; 
import {initializeApp} from "firebase/app"; 
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"; 
import FirebaseConfig from "./components/FirebaseConfig"; 
import './App.css';

function App() {

  const [loggedIn, setLoggedIn] = useState(false); 
  const [loading, setLoading] = useState(true); 
  const [userInfo, setUserInfo] = useState({}); 
  const [appInitialized, setAppInitialized] = useState(false); 
  const [errors, setErrors] = useState(); 

  useEffect(() => {
    initializeApp(FirebaseConfig); 
    setAppInitialized(true); 
  }, []); 

  useEffect(() => {
    const auth = getAuth();  
     if(appInitialized) {
       onAuthStateChanged(auth, (user) => {
         if (user) { //logged in
           setUserInfo(user); 
           setLoggedIn(true); 
         } else{ //not logged in
           setUserInfo({}); 
           setLoggedIn(false); 
         }
         setLoading(false); 
       }); 
     }
   }, [appInitialized]); 

   function logout() {
    const auth = getAuth(); 
    signOut(auth).then(() => {
      setUserInfo({}); 
      setLoggedIn(false); 
      setErrors(); 
    }).catch((error) => {
      console.warn(error); 
      setErrors(error); 
    });
  }

  if (loading || !appInitialized) return null; 
  return (
    <>
      <Header logout={logout} loggedIn={loggedIn}/>
      {errors && <p className="Error PageWrapper">{errors}</p>}
      <Router>
        <Routes>
          <Route path ="/" element={<Dashboard loggedIn={loggedIn} userInfo={userInfo}/>} />
          <Route path = "/createPost" element={<AddPost/>}/> 
          <Route path ="/dashboard/:id" element={<Dashboard loggedIn={loggedIn} userInfo={userInfo}/>} /> 
          <Route path ="/profile/:id" element={loggedIn ? <UserProfile userInfo={userInfo}/> : <Navigate to="/" />} /> 
          <Route path ="/create" element={!loggedIn ? (<CreateUser setLoggedIn={setLoggedIn} setUserInfo={setUserInfo} setErrors={setErrors}/>) : (<Navigate to={`/dashboard/${userInfo.uid}`} /> ) } />
          <Route path ="/login" element={!loggedIn ? (<Login setLoggedIn={setLoggedIn} setUserInfo={setUserInfo} setErrors={setErrors}/>) : (<Navigate to={`/dashboard/${userInfo.uid}`} /> )} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
