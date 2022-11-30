import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom";
import register from "../assets/register-header.svg"
import NavBar from "../Components/NavBar";
import Inputfield from "../Components/Inputfield";
import axios from "axios";


function Register() {
    const history = useHistory();
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');


    function handleSubmitRegister(e) {
        e.preventDefault()
        console.log(
            `Gebruiker heeft account aangemaakt.
            Emailadres: ${registerEmail},  
            Wachtwoord: ${registerPassword}
           `)
        history.push("/");
    }


// POST REQUEST VOOR REGISTRATIEGEGEVENS NAAR BACKEND

    // async function registerHandler() {
    //     try {
    //         const response = await axios.post('http://localhost:3000/login', {
    //             email: " ",
    //             password: " ",
    //         });
    //         console.log(response)
    //
    //     } catch (e) {
    //         console.error(e)
    //     }



    return (
        <>

            <div className="register">
                {/*//HEADER*/}
                <img className="register-header" src={register} alt="register text"/>

                {/*INVOERVELDEN VOOR HET REGISTREREN*/}

                <form
                    className="register-page"
                    onSubmit={handleSubmitRegister}>
                    <p>Geef een emailadres op:</p>
                    <Inputfield
                        fieldId="email-register"
                        fieldType="text"
                        fieldName="email-register"
                        fieldPlaceholder="Emailadres"
                        fieldContent={registerEmail}
                        setFieldContent={setRegisterEmail}
                    />
                    {
                        registerPassword.length >= 1 && !registerEmail.includes("@") &&
                        <span className="error-message">Geef een geldig emailadres op!</span>
                    }

                    <p>Geef een wachtwoord op</p>
                    <Inputfield
                        fieldId="password-register"
                        fieldType="password"
                        fieldName="password-register"
                        fieldPlaceholder="Wachtwoord"
                        fieldContent={registerPassword}
                        setFieldContent={setRegisterPassword}
                    />
                    {
                        registerPassword.length >= 1 && registerPassword.length <= 4 &&
                        <span className="error-message">Wachtwoord moet uit minimaal 4 tekens bestaan</span>
                    }


                    <div className="register-navigation">
                        <button type="button"
                                onClick={() => history.push("/")}>
                            Terug
                        </button>
                        <button type="submit"
                                onClick={handleSubmitRegister}>
                            Registreer!
                        </button>
                    </div>
                </form>

            </div>

        </>
    );
}

export default Register;