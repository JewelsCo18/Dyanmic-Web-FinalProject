import axios from 'axios';
import React from 'react'; 
import { useNavigate } from "react-router-dom"; 
import AddPostForm from"../components/AddPostForm"; 
import Draw from "../images/draw.gif"; 

const base_url = "http://localhost:4000"; 

function AddPost({userInfo}) {
    const navigate = useNavigate(); 

    function submitPost(e) {
        e.preventDefault(); 

        const imageSrc = e.currentTarget.imageSrc.value; 
        const imageAlt = e.currentTarget.imageAlt.value; 
        const imageCaption = e.currentTarget.imageCaption.value; 
        const imageTag = e.currentTarget.imageTag.value; 
        const imageTitle = e.currentTarget.imageTitle.value; 
        const displayName = userInfo.displayName; 
        const uid = userInfo.uid; 
        
        const url = `${base_url}/create?imageSrc=${imageSrc}&imageAlt=${imageAlt}&imageCaption=${imageCaption}&imageTag=${imageTag}&imageTitle=${imageTitle}&name=${displayName}&uid=${uid}`; 

        axios  
            .get(url)
            .then(function (response) {
                navigate("/", {replace: true})

            })
            .catch(function(error) {
                console.warn(error); 
            }); 

    }

    return (
        <div className="PageWrapper FormBackground" style={{height: "100vh"}}>
            <img className="Mascot" alt="pusheen cat drawing" src={Draw}/>
            <h2 style={{textAlign:"center"}}> Post your GIF!</h2>
            <AddPostForm submitPost={submitPost}/>
        </div>
    ); 
}

export default AddPost; 

