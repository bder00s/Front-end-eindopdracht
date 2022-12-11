import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom";
import register from "../assets/register-header.svg"
import NavBar from "../Components/NavBar";
import Inputfield from "../Components/Inputfield";
import axios from "axios";


function Register() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');


   async function handleSubmitRegister(e) {
        e.preventDefault()
       // POST REQUEST VOOR REGISTRATIEGEGEVENS NAAR BACKEND
           try {
               const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                   "username": username,
                   "email": email,
                   "password": password,
                   "role": ["user"]
               });
               // Hier komt nog een headers object met keys. Les 7 Nova 30:30 . Bearer etc.
               console.log(response);
               history.push("/");

           } catch (e) {
               console.error(e)
           }

           console.log(
            `Gebruiker heeft account aangemaakt.
            Gebruikersnaam: ${username},
            Emailadres: ${email},  
            Wachtwoord: ${password}
           `)
        // history.push("/");
    }
    return (
        <>

            <div className="register">

                {/*//HEADER*/}
                <img className="register-header" src={register} alt="register text"/>

                {/*INVOERVELDEN VOOR HET REGISTREREN*/}

                <form
                    className="register-page"
                    onSubmit={handleSubmitRegister}>

                    <p>Geef een username op:</p>
                    <Inputfield
                        fieldId="username-register"
                        fieldType="text"
                        fieldName="username"
                        fieldPlaceholder="Username"
                        fieldContent={username}
                        setFieldContent={setUsername}
                    />



                    <p>Geef een emailadres op:</p>
                    <Inputfield
                        fieldId="email-register"
                        fieldType="email"
                        fieldName="email"
                        fieldPlaceholder="Emailadres"
                        fieldContent={email}
                        setFieldContent={setEmail}
                    />
                    {
                        password.length >= 1 && !email.includes("@") &&
                        <span className="error-message">Geef een geldig emailadres op!</span>
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
                    {
                        password.length >= 1 && password.length <= 6 &&
                        <span className="error-message">Wachtwoord moet uit minimaal 6 tekens bestaan</span>
                    }


                    <div className="register-navigation">
                        <button type="button"
                                onClick={() => history.push("/")}>
                            Terug
                        </button>
                        <button type="submit"
                                >
                            Registreer!
                        </button>
                    </div>
                </form>

            </div>

        </>
    );
}

export default Register;