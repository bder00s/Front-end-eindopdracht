import React, {useContext, useState} from "react"
import {NavLink, useHistory} from "react-router-dom";
import logo from "../assets/logo2.png"
import Inputfield from "../Components/Inputfield";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";




function Home({toggleAuth}) {

    //DE AUTHENTICATIE CONTEXT/////////////////////////////////////////////////////////////////
    const history = useHistory();
    const {login} = useContext(AuthContext);
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    //FUNCTIE DIE HET INLOGGEN AFHANDELD///////////////////////////////////////////////////////
    async function handleSubmitLogin(e) {
        'use strict'
        e.preventDefault();
        toggleError(false);
        try {
            toggleLoading(true);
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                "username": loginUsername,
                "password": loginPassword,
            });


            login(response.data.accessToken);
            history.push("/start");

        } catch (e) {
            console.error(e);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }

    }


    return (
        <div className="login-page">


            <img className="main-logo" src={logo} alt="logo"/>
            {loading && <p className="loading-notification">Loading...✨</p>}

            {/*//////////////////INVOERVELDEN VOOR HET INLOGGEN//////////////////////*/}
            <form className="login-form" onSubmit={handleSubmitLogin}>

                <Inputfield
                    fieldId="username-login"
                    fieldType="text"
                    fieldName="username-login"
                    fieldPlaceholder="Gebruikersnaam"
                    fieldContent={loginUsername}
                    setFieldContent={setLoginUsername}
                />
                {loginUsername.length >= 1 && loginUsername.length <= 6 &&
                    <span className="error-message">Gebruikersnaam moet uit minimaal 6 tekens bestaan</span>
                }

                <Inputfield
                    fieldId="password-login"
                    fieldType="password"
                    fieldName="password-login"
                    fieldPlaceholder="Wachtwoord"
                    fieldContent={loginPassword}
                    setFieldContent={setLoginPassword}
                />
                {loginPassword.length >= 1 && loginPassword.length <= 6 &&
                    <span className="error-message">Wachtwoord moet uit minimaal 6 tekens bestaan</span>
                }
                {error && <p className="error-message">Kloppen je gegevens wel? ⚠️ Deze account bestaat niet</p>}

                <div className="buttons-in-form">
                    <button
                        className="login-button"
                        type="submit"
                        disabled={loginPassword === "" && loginUsername === ""}>
                        Login!
                    </button>


                    {/*/////////////////////LINK NAAR REGISTRATIEPAGINA///////////////////////////////*/}

                    <button type="button">
                        <NavLink to="/register" className="buttonLink">Registreren</NavLink>
                    </button>
                </div>

            </form>


        </div>
    );
}

export default Home;