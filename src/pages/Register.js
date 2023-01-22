import React, {useState} from "react"
import {useHistory} from "react-router-dom";
import register from "../assets/register-header.svg"
import Inputfield from "../Components/Inputfield";
import axios from "axios";


function Register() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);



function goBack() {
    history.push("/")
}

   async function handleSubmitRegister(e) {
    'use strict'
        e.preventDefault()
       toggleError(false);
       // POST REQUEST VOOR REGISTRATIEGEGEVENS NAAR BACKEND//////////////////////////////////
           try {
               toggleLoading(true);
               const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                   "username": username,
                   "email": email,
                   "password": password,
                   "info": "nothing yet",
                   "role": ["user"]
               });
               console.log(response);
               history.push("/");

           } catch (e) {
               console.error(e)
               toggleError(true);
           } finally {
               toggleLoading(false);
           }

           console.log(
            `Gebruiker heeft account aangemaakt.
            Gebruikersnaam: ${username},
            Emailadres: ${email},  
            Wachtwoord: ${password}
           `)

    }
    return (
        <>

            <div className="register">

                {/*//HEADER*/}
                <img className="register-header" src={register} alt="register text"/>

                {/*INVOERVELDEN VOOR HET REGISTREREN*/}
                {error && <p className="error-notification">Er is iets fout gegaan, probeer het opnieuw</p>}
                <form
                    className="register-page"
                    onSubmit={handleSubmitRegister}>


                    <p>Geef een emailadres op:</p>
                    <Inputfield
                        fieldId="email-register"
                        fieldType="email"
                        fieldName="email"
                        fieldPlaceholder="Emailadres"
                        fieldContent={email}
                        setFieldContent={setEmail}
                    />
                    {!email.includes("@") && <span className="error-message">Geef een geldig emailadres op!</span>
                    }

                    <p>Geef een gebruikersnaam op:</p>
                    <Inputfield
                        fieldId="username-register"
                        fieldType="text"
                        fieldName="username"
                        fieldPlaceholder="Gebruikersnaam"
                        fieldContent={username}
                        setFieldContent={setUsername}
                    />
                    {username.length >= 1 && email.includes("@") && username.length <= 6 && <span className="error-message">Gebruikersnaam moet uit minimaal 6 tekens bestaan</span>
                    }




                    <p>Geef een wachtwoord op</p>
                    <Inputfield
                        fieldId="password-register"
                        fieldType="password"
                        fieldName="password"
                        fieldPlaceholder="Wachtwoord"
                        fieldContent={password}
                        setFieldContent={setPassword}
                    />
                    {password.length >= 1 && password.length <= 6 && <span className="error-message">Wachtwoord moet uit minimaal 6 tekens bestaan</span>
                    }
                    {error && <p className="error-message">Er bestaat al een account met dit e-mailadres. Probeer het opnieuw</p>}


                    <div className="register-navigation">
                        <button
                            onClick={goBack}
                            type="button">
                            Terug
                        </button>
                        <button type="submit" disabled={loading}>
                            Registreer!
                        </button>
                        {loading && <p className="loading-notification">Loading...</p>}
                    </div>
                </form>



            </div>

        </>
    );
}

export default Register;