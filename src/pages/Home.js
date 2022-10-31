import React from "react"
import {Link, useHistory} from "react-router-dom";
import logo from "../assets/logo2.png"
import NavBar from "../Components/NavBar";



function Home({toggleAuth}) {
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        console.log("gebruiker logt in");
    }
    function signIn() {
        toggleAuth(true);
        history.push("/start");
    }



    return (
        <div className="login-page">
            <img className="main-logo" src={logo} alt="logo"/>

            {/*INVOERVELDEN VOOR HET INLOGGEN*/}

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
                        Login
                    </button>
                </form>

            {/*LINK NAAR REGISTRATIEPAGINA*/}
                <button type="button">
                    <Link to="/register">Maak een account aan</Link>
                </button>


        </div>
    );
}

export default Home;