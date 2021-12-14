import React, { useEffect, useMemo, useState} from 'react'; 
import axios from "axios"; 
import PostCard from "../components/PostCard"; 

const sample_data = [
    {
        uid: "1", 
        displayName: "Jules", 
        imageAlt: "Cat entering the screen", 
        imageSrc: "https://i.pinimg.com/originals/17/07/46/17074670b1d2d663fe3521a03f40c37c.gif", 
        imageCaption: "Hello!!", 
    },
]; 

function Dashboard({loggedIn, userInfo}) {

    const url="http://localhost:4000/"; 
    const [gifs, setGifs] = useState(); 

    useEffect(() => {
        if (!gifs) {
            axios
                .get(url)
                .then(function (response) {
                    setGifs(response.data); 
                    console.log(response); 
                })
                .catch(function (error) {
                    console.warn(error); 
                })
        } 
    }, [url, gifs]); 

    const {results} = useMemo(() => {
        if (!gifs) return {};
        return {
            results: gifs, 
        }
    }, [gifs])

    return (
        <div className="PageWrapper">
            {loggedIn && (
                <h1>Welcome {userInfo.displayName}</h1>
            )}
            {!loggedIn && (
                <h1>Welcome!</h1>
            )}
            <div>
                {results.map((gif, i) =>
                    <PostCard gif={gif} key={i}/>
                )}
            
            </div>
        </div>

    ); 
}

export default Dashboard; 

