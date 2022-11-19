import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom";
import logo from "../assets/logo2.png"
import NavBar from "../Components/NavBar";
import Inputfield from "../Components/Inputfield";
import homeIcon from "../assets/home.svg";


function Home({toggleAuth}) {
    const history = useHistory();

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');


    //REDIRECT NAAR HOMEPAGINA NA INLOGGEN
    function signIn() {
        // toggleAuth(true);
        history.push("/start");
    }

    //FUNCTIE DIE HET INLOGGEN AFHANDELD
    function handleSubmitLogin(e) {
        e.preventDefault();
        console.log(`
            Gebruiker logt in.
            Emailadres: ${loginEmail},
            Wachtwoord: ${loginPassword}
            `);
        history.push("/start");
    }

    return (
        <div className="login-page">


            <img className="main-logo" src={logo} alt="logo"/>

            {/*INVOERVELDEN VOOR HET INLOGGEN*/}


            <form className="login-form" onSubmit={handleSubmitLogin}>
                <Inputfield
                    fieldId="email-login"
                    fieldType="text"
                    fieldName="email-login"
                    fieldPlaceholder="Emailadres"
                    fieldContent={loginEmail}
                    setFieldContent={setLoginEmail}
                />

                <Inputfield
                    fieldId="password-login"
                    fieldType="password"
                    fieldName="password-login"
                    fieldPlaceholder="Wachtwoord"
                    fieldContent={loginPassword}
                    setFieldContent={setLoginPassword}
                />

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