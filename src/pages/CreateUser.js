import React, {useCallback} from 'react'; 
import {getAuth, updateProfile, createUserWithEmailAndPassword} from "firebase/auth"; 
import CreateUserForm from '../components/CreateUserForm'; 

function CreateUser( {setLoggedIn, setUserInfo, setErrors}) {

    const signUpUser = useCallback((e)=> {
        e.preventDefault(); 

        const email = e.currentTarget.email.value; 
        const password = e.currentTarget.password.value; 
        const displayName = e.currentTarget.displayName.value; 
        const auth = getAuth(); 

        createUserWithEmailAndPassword(auth, email, password) 
        .then((userCredential) => {
            const user = userCredential.user; 
            updateProfile(auth.currentUser, {
                displayName:displayName, 
            }).then(function() {
                setLoggedIn(true); 
                setUserInfo({
                    email: user.email, 
                    displayName: user.displayName, 
                    uid: user.uid, 
                    accessToken: user.accessToken, 
                }); 
            });
        })
        .catch((error) => {
            const errorCode = error.code; 
            const errorMessage = error.message; 
            console.warn(error, errorCode, errorMessage); 
            setErrors(errorMessage); 
        }); 
    }, [setLoggedIn, setUserInfo, setErrors]); 
    
    return (
        <div className="PageWrapper">
            <h2> SignUp </h2>
            <CreateUserForm className="Form" signUpUser={signUpUser}/>
        </div> 
    );
}

export default CreateUser; 

