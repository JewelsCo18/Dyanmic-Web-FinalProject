import React from "react"; 

function AddPostForm( {submitPost} ) {
    return (
        <div className="Form">
            <h2> Add Post Form</h2>
            <form onSubmit={(e) => submitPost(e)}>
                <label htmlFor="imageSrc">Image URL </label>
                <input type="text" name="imageSrc" placeholder="your gif"/>

                <label htmlFor="imageAlt">Image Alt </label>
                <input type="text" name="imageAlt" placeholder="image alt"/>

                <label htmlFor="imageCaption">Image Caption </label>
                <input type="text" name="imageCaption" placeholder="check out my recent gif!"/>

                <button type="submit"> Create Gif Post</button>
            </form>
        </div>
    ); 
}

export default AddPostForm; 