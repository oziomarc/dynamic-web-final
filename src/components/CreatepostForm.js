import React from "react";

function CreatepostForm({sendPost}) {
    return (
        <>
            
            <form className="letterForm" onSubmit={(e) => sendPost(e)}>
                <div className="prompt"><p>Prompt Goes Here:</p></div>

                <label htmlFor="letterText" style={{fontSize: 25}}>Write a letter in response to the prompt.</label>
                <input type="text" id="letter-input" name="letterText"/>

                {/* <label htmlFor="stamp"></label>
                <input 
                type="file"
                id="stamp" name="stamp"
                accept="image/png, image/jpeg"
                /> */}

                <button type="submit">Post</button>
            </form>
        </>
        
    )
}

export default CreatepostForm;