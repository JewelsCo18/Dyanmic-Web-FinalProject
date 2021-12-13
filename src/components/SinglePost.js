import React from 'react'; 

function SinglePost({gif}) {
    return (
        <div className="PageWrapper">
            <img src={gif.imageSrc} alt={gif.imageAlt}/>
            <h1>Created by {gif.imageAuthor}</h1>
            <p>{gif.imageCaption}</p>
        </div>
    ); 
}

export default SinglePost; 

