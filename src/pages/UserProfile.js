import React, { useEffect, useMemo, useState} from 'react'; 
import axios from "axios"; 
import PostCard from "../components/PostCard"; 
import Mascot from "../images/mascot.gif"; 

function UserProfile({userInfo}) {
    const url="http://localhost:4000/"; 
    const [myGifs, setMyGifs] = useState(); 

    useEffect(() => {
        if (!myGifs) {
            axios
                .get(url)
                .then(function (response) {
                    setMyGifs(response.data); 
                })
                .catch(function (error) {
                    console.warn(error); 
                })
        } 
    }, [url, myGifs]); 

    const results = useMemo(() => {
        if (!myGifs) return [];
        else {
            let specificGifs = []; 
            for (var i=0; i<myGifs.length; i++){
                if (myGifs[i].userID === userInfo.uid) {
                    specificGifs.push(myGifs[i]); 
                }
            }
            return specificGifs; 
        }
    }, [myGifs, userInfo])

    return (
        <div className="PageWrapper userProfile">
            <div className="userLeft">
                <img className="Mascot" alt="profile" src={Mascot}/>
                <h1> Hello {userInfo.displayName}!</h1>
                <p> Email: {userInfo.email} </p>
            </div>
            <div className="userRight">
                <h1> Your Posts</h1>
                {results.map((gif, i) =>
                    <PostCard gif={gif} key={i}/>
                )}
            </div>
        </div>
    ); 
}

export default UserProfile; 

