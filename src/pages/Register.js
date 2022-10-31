import React from "react"
import {Link, useHistory} from "react-router-dom";


function Register() {
    return (
        <div className="register">
                <h1>Registreren</h1>
                <form className="register-page">
                    <label id="email-register">
                        Geef een emailadres op
                        <input
                            type="text"
                            name="email-register"
                            placeholder="Emailadres"
                        />
                        </label>

                    <label id="password-register">
                        Geef een wachtwoord op
                        <input
                            type="password"
                            name="password-register"
                            placeholder="Wachtwoord"
                        />
                    </label>
                </form>

        </div>
    );
}

export default Register;