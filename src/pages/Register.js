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
        history.push("/");
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
                    <p>Geef een emailadres op:</p>
                    <Inputfield
                        fieldId="email-register"
                        // fieldText="Geef een emailadres op: "
                        fieldType="text"
                        fieldName="email-register"
                        fieldPlaceholder="Emailadres"
                        fieldContent={registerEmail}
                        setFieldContent={setRegisterEmail}
                    />

                    <p>Geef een wachtwoord op</p>
                    <Inputfield
                        fieldId="password-register"
                        // fieldText="Geef een wachtwoord op: "
                        fieldType="password"
                        fieldName="password-register"
                        fieldPlaceholder="Wachtwoord"
                        fieldContent={registerPassword}
                        setFieldContent={setRegisterPassword}
                    />

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