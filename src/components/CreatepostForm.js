import React from "react";
import Prompts from "../prompts";

function CreatepostForm({sendPost}) {
    return (
        <>
            <div className="prompt"></div>
            <form className="FormElement" onSubmit={(e) => sendPost(e)}>
                <label htmlFor="text">Write a letter in response to the prompt.</label>
                <input type="text" name="text" />

                <button type="submit">Post</button>
            </form>
        </>
        
    )
}

export default CreatepostForm;