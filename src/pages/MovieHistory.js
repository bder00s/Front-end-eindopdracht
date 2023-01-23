import React, {useEffect, useState} from "react"
import NavBar from "../Components/NavBar";
import axios from "axios";


function MovieHistory() {

    const [showInfo, toggleShowInfo] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);


    // GET REQUEST TO GET USERINFO FROM DATABASE //

    useEffect(() => {

        async function getUserInfo() {
            const token = localStorage.getItem('token');
            try {
                toggleLoading(true);
                const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user/', {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                console.log(result.data);
                toggleShowInfo(result.data);

            } catch (e) {
                console.error(e)
                toggleError(true);
            } finally {
                toggleLoading(false);
            }

        }
        getUserInfo();
    }, []);



    return (
        <div className="movie-history">
            <NavBar/>

            <h1 className="header-title">Profiel en Movie History</h1>

            <div className="profile-info">

                {/*<button type="button" onClick={getUserInfo}>Toon mijn gegevens</button>*/}
                {error && <p>Er is iets misgegaan, probeer het opnieuw</p>}
                {loading && <p className="loading-notification">Loading...✨</p>}

                {showInfo &&  <article className="movie-history-text">
                    <p>Gebruikersnaam:</p>
                    <h3>{showInfo.username}</h3>

                    <p>Emailadres:</p>
                    <h3>{showInfo.email}</h3>

                    <h2>Je laatste filmresultaat:</h2>
                    {showInfo.info ? <h2 className="movie-box">{showInfo.info}</h2> : <p>🍿 Je hebt nog geen film gezocht 🍿 </p>}🎥

                </article>}
            </div>

        </div>
    );
}

export default MovieHistory;