import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({})

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
    });
    const history = useHistory()

    function login(){
        toggleIsAuth({
            ...isAuth,
            isAuth: true,
            //Hieronder komt de user
        });
        console.log("Gebruiker logt in");
        history.push("/start");
    }

    function logout(){
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