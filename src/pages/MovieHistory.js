import React from "react"
import NavBar from "../Components/NavBar";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

function MovieHistory() {



    return (
        <div className="movie-history">
           <NavBar/>
            <h1>Movie History/Profile</h1>
            <div className="profile-info">

            </div>
        </div>
    );
}

export default MovieHistory;