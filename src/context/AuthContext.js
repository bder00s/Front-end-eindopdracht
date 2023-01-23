import React, {createContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
import {testBackend} from "../helpers/testBackend";

export const AuthContext = createContext({})

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const history = useHistory()

    testBackend();

    //MOUNTING LIFECYCLE///////////
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decoded = jwtDecode(token);
            getUserData(decoded.sub, token);
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }

    }, []);



    //LOGIN FUNCTIE WAAR OOK DE TOKEN AAN DOOR WORDT GEGEVEN/////////////////////////////////////

    function login(jwt) {
        //Token naar LocalStorage:
        localStorage.setItem('token', jwt);
        //Token gedecodeerd:
        const decoded = jwtDecode(jwt)
        console.log(decoded)
        // getUserData(decoded.sub, jwt)

        // GEBRUIKER WORDT INGELOGD/////////////////////////////////////
        toggleIsAuth({
            ...isAuth,
            isAuth: true,
            user: {
                email: decoded.email,
                id: decoded.sub,
            }
        });
        console.log("Gebruiker logt in");
    }

    history.push("/start");

    // GEBRUIKER WORDT UITGELOGD//////////////////////////////////////////////



    function logout() {
        //Token uit local storage verwijderen
        localStorage.removeItem('token')
        toggleIsAuth({
            ...isAuth,
            isAuth: false,
            user: null,
        });
        console.log("Gebruiker logt uit");
        history.push("/");
    }

    //GEBRUIKERSINFO OPVRAGEN/////////////////////////////////////////
    async function getUserData(token) {
        try {
            const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user/', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })

            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                    info: result.data.info
                },
                status: 'done',
            })


        } catch (error) {
            console.error(error)

            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    const contextData = {
        isAuth: isAuth,
        isUser: isAuth.user,
        isEmail: isAuth.email,
        login: login,
        logout: logout,

    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...✨</p>}
        </AuthContext.Provider>


    )
}

export default AuthContextProvider