import React, { useEffect, useState } from "react"; 
import axios from "axios"; 
import {useParams} from "react-router-dom"; 
import PostCard from "../components/PostCard"; 

function SinglePost(){
    let {id} = useParams(); 
    console.log(id); 
    // const url = process.env.BACKEND_URL || `http://localhost:4000`; 
    const url="http://localhost:4000"; 
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
    }, [id, url]); 
    
    return (
        <div className="PageWrapper" style={{height:"70vh", marginTop: "175px"}}>
            <PostCard style={{height:"90vh"}} gif={gifPost}/>
        </div>
    )
}

export default SinglePost;