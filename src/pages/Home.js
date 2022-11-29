import React, {useContext, useState} from "react"
import {Link, NavLink, useHistory} from "react-router-dom";
import logo from "../assets/logo2.png"
import enter from "../assets/Enter button.png"
import Inputfield from "../Components/Inputfield";
import axios from "axios";

import {AuthContext} from "../context/AuthContext";


function Home({toggleAuth}) {

    //DOORLINKEN EN DE AUTHENTICATIE CONTEXT
    const history = useHistory();
    const {isAuth, login} = useContext(AuthContext);

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    //FUNCTIE DIE HET INLOGGEN AFHANDELD
    function handleSubmitLogin(e) {
        e.preventDefault();
        console.log(`
            Gebruiker logt in.
            Emailadres: ${loginEmail},
            Wachtwoord: ${loginPassword}
            `);
        history.push("/start");
        login()
        // clickHandler()
    }

    //POST REQUEST NAAR BACKEND

    async function clickHandler() {
        try {
            const response = await axios.post('http://localhost:3000/login', {
                email: " ",
                password: " ",
            });
            console.log(response)

        } catch (e) {
            console.error(e)
        }
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
                {loginEmail.length >= 1 && !loginEmail.includes("@") &&
                    <span className="error-message">Geef een geldig emailadres op!</span>}

                <Inputfield
                    fieldId="password-login"
                    fieldType="password"
                    fieldName="password-login"
                    fieldPlaceholder="Wachtwoord"
                    fieldContent={loginPassword}
                    setFieldContent={setLoginPassword}
                />
                <div className="buttons-in-form">

                <button
                    onClick={clickHandler}
                    className="login-button"
                    type="submit"
                    disabled={loginPassword === "" && loginEmail === ""}>
                    Login!
                </button>
                    {/*<img src={enter} className="enter-button" alt="login"/>*/}

                {/*LINK NAAR REGISTRATIEPAGINA*/}

                <button type="button">
                    <NavLink to="/register"  className="buttonLink">Registreren</NavLink>
                </button>
                </div>

            </form>




        </div>
    );
}

export default Home;