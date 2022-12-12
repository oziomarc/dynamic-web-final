import React from "react";

function CreatepostForm({sendPost}) {
    return (
        <>
            <div className="prompt"></div>
            <form className="FormElement" onSubmit={(e) => sendPost(e)}>
                <label htmlFor="stamp"></label>
                <input 
                type="file"
                id="stamp" name="stamp"
                accept="image/png, image/jpeg"
                />

                <label htmlFor="letterText">Write a letter in response to the prompt.</label>
                <input type="text" name="letterText" />

                <button type="submit">Post</button>
            </form>
        </>
        
    )
}

export default CreatepostForm;