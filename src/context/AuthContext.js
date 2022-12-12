import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
import {testBackend} from "../helpers/testBackend";

export const AuthContext = createContext({})

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
    });
    const history = useHistory()

//GEBRUIKERS INFO OPVRAGEN
    testBackend();

    async function getUserData(id, token) {
        try {
            const result = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            console.log(result)
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {id: result.data.id,
                email:result.data.email,
                username:result.data.username}
            })

        } catch (error) {
            console.error(error)
        }
    }


//LOGIN FUNCTIE WAAR OOK DE TOKEN AAN DOOR WORDT GEGEVEN
    function login(jwt) {

        //TOKEN GEDECODEERD
        const decoded = jwtDecode(jwt)
        console.log(decoded)

        //Token naar Local storage
        localStorage.setItem('token', jwt);

        getUserData(decoded.sub, jwt)

        //Gebruiker wordt ingelogd
        toggleIsAuth({
            ...isAuth,
            isAuth: true,
            user: {
                email: decoded.email,
                id: decoded.sub,
            }
        });
        console.log("Gebruiker logt in");
        history.push("/start");
    }

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

    const contextData = {
        isAuth: isAuth,
        isUser: isAuth.user,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>


    )
}

export default AuthContextProvider