import React from "react";
import { Link } from "react-router-dom";

function SignUpForm({signUpUser}) {
    return (
        <form className="FormElement" onSubmit={(e) => signUpUser(e)}>
            <h3><i>Sign Up</i></h3>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />

            <label htmlFor="displayName">Display Name</label>
            <input type="text" name="displayName" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            <div className="buttonContainer-2">
                <Link to="/"><button type="button">Cancel</button></Link>
                <button type="submit">Submit</button>
            </div>
            
        </form>
    )
}

export default SignUpForm;