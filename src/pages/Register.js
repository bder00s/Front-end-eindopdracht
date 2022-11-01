import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom";
import register from "../assets/register-header.svg"
import NavBar from "../Components/NavBar";
import Inputfield from "../Components/Inputfield";


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
    }

    function accountMade() {
        history.push("/");
    }

    return (
        <>
            {/*<NavBar/>*/}
            <div className="register">
                {/*//HEADER*/}
                <img className="register-header" src={register} alt="register text"/>

                {/*INVOERVELDEN VOOR HET REGISTREREN*/}

                <form
                    className="register-page"
                    onSubmit={handleSubmitRegister}>
                    <Inputfield
                        fieldId="email-register"
                        fieldText="Geef een emailadres op"
                        fieldType="text"
                        fieldName="email-register"
                        fieldPlaceholder="Emailadres"
                        fieldContent={registerEmail}
                        setFieldContent={setRegisterEmail}
                    />

                    <Inputfield
                        fieldId="password-register"
                        fieldText="Geef een wachtwoord op"
                        fieldType="password"
                        fieldName="password-register"
                        fieldPlaceholder="Wachtwoord"
                        fieldContent={registerPassword}
                        setFieldContent={setRegisterPassword}
                    />

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