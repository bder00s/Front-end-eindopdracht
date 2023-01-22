import React, {useContext, useState} from "react"
import NavBar from "../Components/NavBar";
import axios from "axios";


function MovieHistory() {

    const [showInfo, toggleShowInfo] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);


    // GET REQUEST TO GET USERINFO FROM DATABASE //

    async function getUserInfo() {
        const token = localStorage.getItem('token');
        try {
            toggleLoading(true);
            const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/test/user/', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            console.log(result.data.username);

        } catch (e) {
            console.error(e)
            toggleError(true);
        } finally {
            toggleLoading(false);
        }

    }

    return (
        <div className="movie-history">
            <NavBar/>

            <h1 className="header-title">Movie History/Profile</h1>
            <div className="profile-info">
                <button type="button" onClick={getUserInfo}>Toon mijn gegevens</button>
                {error && <p>Er is iets misgegaan, probeer het opnieuw</p>}
                {loading && <p className="loading-notification">Loading...</p>}
                <h1>{showInfo.username}</h1>
                <p>{showInfo.email}</p>
                <p>Je laatste filmresultaat: <a href={`https://www.imdb.com/title/${showInfo.info}`} target={"blank"}/></p>
            </div>
        </div>
);
}

export default MovieHistory;