import React, {useContext, useState} from "react"
import {Link, NavLink, useHistory} from "react-router-dom";
import logo from "../assets/logo2.png"
import Inputfield from "../Components/Inputfield";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";

//https://github.com/hogeschoolnovi/novi-educational-backend-documentation


function Home({toggleAuth}) {

    //DOORLINKEN EN DE AUTHENTICATIE CONTEXT
    const history = useHistory();
    const {isAuth, login, user} = useContext(AuthContext);
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    // const [error, setError] = useState('');

    //FUNCTIE DIE HET INLOGGEN AFHANDELD
    async function handleSubmitLogin(e) {
        e.preventDefault();
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                "username": loginUsername,
                "password": loginPassword,
            });
            // console.log(response);
            console.log(response.data);
            login(response.data.accessToken);

            history.push("/start");

        } catch (e) {
            console.error(e);


        }

        console.log(`
            Gebruiker logt in.
            Gebruikersnaam: ${loginUsername},
            Wachtwoord: ${loginPassword}
            `);


    }


    return (
        <div className="login-page">


            <img className="main-logo" src={logo} alt="logo"/>

            {/*INVOERVELDEN VOOR HET INLOGGEN*/}
            <form className="login-form" onSubmit={handleSubmitLogin}>

                <Inputfield
                    fieldId="username-login"
                    fieldType="text"
                    fieldName="username-login"
                    fieldPlaceholder="Gebruikersnaam"
                    fieldContent={loginUsername}
                    setFieldContent={setLoginUsername}
                />

                {/*<Inputfield*/}
                {/*    fieldId="email-login"*/}
                {/*    fieldType="text"*/}
                {/*    fieldName="email-login"*/}
                {/*    fieldPlaceholder="Emailadres"*/}
                {/*    fieldContent={loginEmail}*/}
                {/*    setFieldContent={setLoginEmail}*/}
                {/*/>*/}
                {/*{loginEmail.length >= 1 && !loginEmail.includes("@") &&*/}
                {/*    <span className="error-message">Geef een geldig emailadres op!</span>}*/}

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

                <div className="buttons-in-form">
                    <button
                        className="login-button"
                        type="submit"
                        disabled={loginPassword === "" && loginUsername === ""}>
                        Login!
                    </button>


                    {/*LINK NAAR REGISTRATIEPAGINA*/}

                    <button type="button">
                        <NavLink to="/register" className="buttonLink">Registreren</NavLink>
                    </button>
                </div>

            </form>


        </div>
    );
}

export default Home;