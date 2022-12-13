import React from "react";

function LetterPost ({letterText, displayName}) {
    return (
        <div className="letterContainer">
            <div className="letterPost">
                <div className="letterText">
                    <p>{letterText}</p>
                </div>
                <p id="authorText">from: {displayName}</p>
            </div>

        </div>
    );
}

export default LetterPost