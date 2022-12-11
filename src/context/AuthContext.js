import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({})

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
    });
    const history = useHistory()

    //LOGIN FUNCTIE WAAR OOK DE TOKEN AAN DOOR WORDT GEGEVEN
    function login(token){
        console.log(token);
        //Token naar Local storage
        localStorage.setItem('token', token);
        const decodedToken = jwtDecode(token)
        console.log('decoded token:', decodedToken);
        //Nieuwe data opvragen van gebruiker



        toggleIsAuth({
            ...isAuth,
            isAuth: true,
            // user: {
            // email: decodedToken.email,
            // id: decodedToken.sub,
            // }

        });
        console.log("Gebruiker logt in");
        history.push("/start");
    }

    function logout(){
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
        login: login,
        logout: logout,
    };

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>


    )
}

export default AuthContextProvider