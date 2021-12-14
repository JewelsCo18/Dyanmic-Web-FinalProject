import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, {useCallback} from 'react'; 
import LoginForm from '../components/LoginForm';
import Mascot from "../images/mascot.gif"; 

function Login({setLoggedIn, setUserInfo, setErrors}) {

    const loginUser = useCallback((e)=> {
        e.preventDefault(); 

        const email = e.currentTarget.email.value; 
        const password = e.currentTarget.password.value; 

        const auth = getAuth(); 

        //we call this when we want users to submit their forms
        signInWithEmailAndPassword(auth, email, password) 
        .then((userCredential) => {
            const user = userCredential.user; 
            setLoggedIn(true); 
            setUserInfo({
                email: user.email, 
                displayName: user.name, 
                uid: user.uid, 
                accessToken: user.accessToken, 
            }); 
            setErrors(); 
        })
        .catch((error) => {
            const errorCode = error.code; 
            const errorMessage = error.message; 
            console.warn(error, errorCode, errorMessage); 
            setErrors(errorMessage); 
        }); 
    }, [setLoggedIn, setUserInfo, setErrors]); 

    return (
        <div className="PageWrapper FormBackground">
            <img className="Mascot" alt="girl winking at you" src={Mascot}/>
            <h2 style={{textAlign:"center"}}> Welcome Back to GIF Grinners! </h2>
            <LoginForm className="Form" loginUser={loginUser}/>
        </div> 
    );
}

export default Login; 

