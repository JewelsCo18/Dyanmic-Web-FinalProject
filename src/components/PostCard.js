import React from "react";

function PostCard( {gif} ) {
    return (
        <div className="PageWrapper">
            <img src={gif.imageSrc} alt={gif.imageAlt}/>
            <h1>Created by {gif.displayName} </h1>
            <p>{gif.imageCaption}</p>
            <a href={`/gif/${gif.id}`}>Expand</a>
        </div>
    ); 
}

export default PostCard; 

