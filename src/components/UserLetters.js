import React from "react";

function UserLetters ({letterText, displayName}) {
    return (
        <div className="userLetterContainer">
                <div className="userLetterPost">
                        <div className="userLetterText">
                            <p>{letterText}</p>
                        </div>
                </div>
        </div>
    );
}

export default UserLetters