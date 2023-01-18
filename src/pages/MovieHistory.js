import React, {useContext, useState} from "react"
import NavBar from "../Components/NavBar";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";

function MovieHistory() {

    // GET REQUEST TO GET USERINFO FROM DATABASE //
    const [showInfo, toggleShowInfo] = useState('');
    const {token} = useContext(AuthContext);

    async function getUserInfo() {
        try {
            const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/test/user', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            console.log(result.username + result.email + result.info);
            toggleShowInfo(result.data);

        } catch (e) {
            console.error(e)
        }
        getUserInfo();
    }

    return (
        <div className="movie-history">
            <NavBar/>
            <h1>Movie History/Profile</h1>
            <div className="profile-info">
                <h1>{showInfo.username}</h1>
                <p>{showInfo.email}</p>
                <p>Je laatste filmresultaat: <a href={`https://www.imdb.com/title/${showInfo.info}`} target={"blank"}/></p>
            </div>
        </div>
);
}

export default MovieHistory;