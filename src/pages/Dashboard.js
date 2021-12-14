import React, { useEffect, useMemo, useState} from 'react'; 
import {useLocation} from "react-router-dom";
import axios from "axios"; 
import PostCard from "../components/PostCard"; 

function useQuery() { 
    return new URLSearchParams(useLocation().search); 
}

function changeWord(e) {
    e.preventDefault(); 
    // const word = e.currentTarget.word; 
}

function Dashboard({loggedIn, userInfo}) {

    // const url = process.env.BACKEND_URL || `http://localhost:4000`; 
    const [givenGif, setGivenGif] = useState(); 
    const [gifs, setGifs] = useState(); 
    let query = useQuery();
    let url="http://localhost:4000"; 

    useEffect(() => {
        const gifValue = query.get('gif'); 
        setGivenGif(gifValue); 
    }, [givenGif])

    useEffect(() => {
        if (!gifs) {
            axios
                .get(url)
                .then(function (response) {
                    setGifs(response.data); 
                })
                .catch(function (error) {
                    console.warn(error); 
                })
        } 
    }, [url, gifs]); 

    const results = useMemo(() => {
        if (!gifs) return [];
        else {
            if(givenGif){
                let specificGifs = []; 
                for (var i=0; i<gifs.length; i++){
                    let currTag = gifs[i].imageTag.split(","); 
                    console.log(currTag); 
                    for (var j=0; j<currTag.length; j++){
                        if (currTag[j] == givenGif || currTag[j] == (" " + givenGif)){
                            specificGifs.push(gifs[i]); 
                        }
                    }
                }
                return specificGifs; 
            }  
            return gifs
        }
    }, [gifs])

    return (
        <div className="PageWrapper">
            {loggedIn && (
                <h1>Welcome {userInfo.displayName}!</h1>
            )}
            {!loggedIn && (
                <h1>Welcome!</h1>
            )}
            <div className="search">
                <form  onSubmit={(e) => changeWord()}>
                    <input className="gifInput" type="text" placeholder="Search Gifs" name="gif"/>
                    <button className="gifButton" type="submit" style={{marginBottom:`20px`}}>Click</button>
                </form>
            </div>
            <div>
                {results.map((gif, i) =>
                    <PostCard gif={gif} key={i}/>
                )}
            
            </div>
        </div>

    ); 
}

export default Dashboard; 

