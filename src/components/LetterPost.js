import React from "react";
import { Link } from "react-router-dom";

function LetterPost ({letterText, displayName}) {
    return (
        <div className="letterContainer">
                <div className="letterPost">
                        <div className="letterText">
                            <p>{letterText}</p>
                        </div>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <p id="authorText"><strong>from:</strong> @{displayName}</p>
                    </Link>
                </div>
        </div>
    );
}

export default LetterPost