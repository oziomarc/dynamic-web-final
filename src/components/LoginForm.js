import React from "react";
import { Link } from "react-router-dom";

function LoginForm({loginUser}) {
    return (
        <div>
            <form className="FormElement" onSubmit={(e) => loginUser(e)}>
                <h3><i>Log In</i></h3>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" />
                
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />

                <div className="buttonContainer-2">
                    <Link to="/"><button type="button">Cancel</button></Link>
                    <button type="submit">Submit</button>
                 </div>
            </form>
        </div>
        
    )
}

export default LoginForm;