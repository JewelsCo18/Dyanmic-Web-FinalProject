import React from "react"; 

function AddPostForm( {submitPost} ) {
    return (
        <div className="Form">
            <form onSubmit={(e) => submitPost(e)}>
                <label htmlFor="imageTitle">GIF Title </label>
                <input type="text" name="imageTitle" placeholder="my gif name"/>

                <label htmlFor="imageSrc">Image URL </label>
                <input type="text" name="imageSrc" placeholder="your gif"/>

                <label htmlFor="imageAlt">Image Alt </label>
                <input type="text" name="imageAlt" placeholder="image alt"/>

                <label htmlFor="imageCaption">Image Caption </label>
                <input type="text" name="imageCaption" placeholder="check out my recent gif!"/>

                <label htmlFor="imageTag">Tags (please separate by commas)</label>
                <input type="text" name="imageTag" placeholder="cat"/>

                <button type="submit"> Create Gif</button>
            </form>
        </div>
    ); 
}

export default AddPostForm; 