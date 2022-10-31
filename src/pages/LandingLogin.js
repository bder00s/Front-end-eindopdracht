import React from "react"
import {Link, useHistory} from "react-router-dom";


function LandingLogin({toggleAuth}) {
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault();
        console.log("gebruiker logt in")
    }

    function signIn() {
        toggleAuth(true);
        history.push("/home-logged-in")
    }



    return (
        <div className="login-page">
                <h1>MovieMood + Logo</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label id="login">
                        <input
                            type="text"
                            name="email-login"
                            placeholder="Emailadres"
                        />
                        <input
                            type="password"
                            name="password-login"
                            placeholder="Wachtwoord"
                        />
                    </label>
                    <button
                        onClick={signIn}
                        className="login-button"
                        type="submit">
                        Login (dit wordt een knop)
                    </button>
                </form>
                <button type="button">
                    <Link to="/register">Registreren</Link>
                </button>


        </div>
    );
}

export default LandingLogin;