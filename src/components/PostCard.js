import React from "react";

function PostCard( {gif} ) {
    return (
        <div className="PageWrapper gifPost">
            <h1 className="gifTitle"> {gif.imageTitle} </h1>
            <img className="gifImage" src={gif.imageSrc} alt={gif.imageAlt}/>
            <div className="gifFooter">
                <h1 className="gifAuthor" >Created by {gif.displayName} </h1>
                <a href={`/gif/${gif.id}`}>Expand</a>
            </div>
            <p className="gifTag">#{gif.imageTag}</p>
            <p className="gifCaption">{gif.imageCaption}</p>
        </div>
    ); 
}

export default PostCard; 

