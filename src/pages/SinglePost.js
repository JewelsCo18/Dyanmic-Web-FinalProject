import React, { useEffect, useState } from "react"; 
import axios from "axios"; 
import {useParams} from "react-router-dom"; 
import PostCard from "../components/PostCard"; 

function SinglePost(){
    let {id} = useParams(); 
    const url = `http://localhost:4000`; 
    const [gifPost, setGifPost] = useState({}); 

    useEffect(() => {
        axios 
            .get(`${url}/gif/${id}`)
            .then(function (response) {
                console.log(response); 
                setGifPost(response.data); 
            })
            .catch(function (error) {
                console.warn(error)
            }); 
    }, [id]); 
    
    return (
        <div className="PageWrapper">
            <h1> Post</h1>
            <PostCard gif={gifPost}/>
        </div>
    )
}

export default SinglePost;