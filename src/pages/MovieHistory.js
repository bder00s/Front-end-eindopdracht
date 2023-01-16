import React from "react"
import NavBar from "../Components/NavBar";

import axios from "axios";

function MovieHistory() {

    // GET REQUEST TO GET USERINFO FROM DATABASE
//
async function getUserInfo() {
    try {
      const result =  await axios.get('https://frontend-educational-backend.herokuapp.com/api/test/user', {
            headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJib25uZTEyMyIsImlhdCI6MTY3Mzg5ODAyMiwiZXhwIjoxNjczOTg0NDIyfQ.xG7MrqJ-nrKYdeY4lhmk1za0sw6-rlqG2wEMzimHZY7TeZJ3GYq0HOQbX319Fz2TzuDtHSQYRkmzdu3mME1kvw "
                } })
        console.log(result.username);
        console.log(result.email);
        console.log(result.info);
    } catch(e) {
        console.error(e)
    }
}

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