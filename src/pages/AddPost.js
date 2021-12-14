import axios from 'axios';
import React from 'react'; 
import { useNavigate } from "react-router-dom"; 
import AddPostForm from"../components/AddPostForm"; 

const base_url = "http://localhost:4000"; 

function AddPost({userInfo}) {
    const navigate = useNavigate(); 

    function submitPost(e) {
        e.preventDefault(); 

        const imageSrc = e.currentTarget.imageSrc.value; 
        const imageAlt = e.currentTarget.imageAlt.value; 
        const imageCaption = e.currentTarget.imageCaption.value; 
        const displayName = userInfo.displayName; 
        const uid = userInfo.uid; 
        
        const url = `${base_url}/create?imageSrc=${imageSrc}&imageAlt=${imageAlt}&imageCaption=${imageCaption}&name=${displayName}&uid=${uid}`; 

        axios  
            .get(url)
            .then(function (response) {
                console.log({response}); 
                navigate("/", {replace: true})

            })
            .catch(function(error) {
                console.warn(error); 
            }); 

    }

    return (
        <div className="PageWrapper">
            <h1> Add Post </h1>
            <AddPostForm submitPost={submitPost}/>
        </div>
    ); 
}

export default AddPost; 

