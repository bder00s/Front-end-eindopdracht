import React from "react"
import NavBar from "../Components/NavBar";

import axios from "axios";

function MovieHistory() {

    // GET REQUEST TO GET USERINFO FROM DATABASE
//
// async function getUserInfo() {
//     try {
//       const result =  await axios.get('https://frontend-educational-backend.herokuapp.com/api/test/user', {
//             headers: {
//                     "Content-Type": "application/json",
//                     // "Authorization": `Bearer ${token}`
//                 } })
//         console.log(result);
//     } catch(e) {
//         console.error(e)
//     }
// }

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