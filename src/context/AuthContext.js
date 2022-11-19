import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({})

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(false);
    const history = useHistory()

    function login(){
        toggleIsAuth(true);
        console.log("Gebruiker logt in");
        history.push("/start");
    }

    function logout(){
        toggleIsAuth(false);
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