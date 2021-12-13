import React, { useEffect, useState} from 'react'; 
import axios from "axios"; 
import SinglePost from "../components/SinglePost"; 

const sample_data = [
    {
        postId: "1", 
        userId: "1", 
        imageAlt: "Cat entering the screen", 
        imageSrc: "https://i.pinimg.com/originals/17/07/46/17074670b1d2d663fe3521a03f40c37c.gif", 
        imageAuthor: "ME", 
        imageCaption: "Hello!!", 
    },
]; 

const url="https://localhost:4000"; 

function Dashboard({loggedIn, userInfo}) {

    const [gifs, setGifs] = useState(); 

    useEffect(() => {
            axios
                .get(url)
                .then(function (response) {
                    console.log({response}); 
                    setGifs(response.data); 
                })
                .catch(function (error) {
                    console.warn(error); 
                })
    }, []); 

    return (
        <div className="PageWrapper">
            {loggedIn && (
                <h1>Welcome {userInfo.email}</h1>
            )}
            {!loggedIn && (
                <h1>Welcome!</h1>
            )}
            <div>
                {sample_data.map((gif, i) =>
                    <SinglePost gif={gif} key={i}/>
                )}
            
            </div>
        </div>

    ); 
}

export default Dashboard; 

