import React from "react"
import {Link, useHistory} from "react-router-dom";
import register from "../assets/register-header.svg"
import NavBar from "../Components/NavBar";


function Register() {


    function accountMade(e) {
        e.preventDefault()
        console.log("gebruiker heeft account aangemaakt")
    }

    return (
<>
    {/*<NavBar/>*/}
        <div className="register">

              <img className="register-header" src={register} alt="register text" />

            {/*INVOERVELDEN VOOR HET REGISTREREN*/}

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
                    <button type="submit"
                            onClick={accountMade}
                    >
                        Registreer!
                    </button>
                </form>

        </div>

</>
    );
}

export default Register;