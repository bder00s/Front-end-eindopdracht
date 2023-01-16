import React, {useContext, useEffect, useState} from "react"
import axios from "axios";
import share from "../assets/share.svg"
import retry from "../assets/test.png"
import NavBar from "../Components/NavBar";
import {Link} from "react-router-dom";
import {appContext} from "../App";


const keyApi = process.env.REACT_APP_API_KEY


function FilmResult() {

    const {userMood, changeMood} = useContext(appContext);

    const [movieResult, setMovieResult] = useState('');
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    useEffect(() => {

        function questionData() {
            console.log(`UserMood = ${userMood}, ChangeMood = ${changeMood}`)
        }

        questionData()

        // ANTWOORDEN VERWERKEN NAAR FILMTITEL/GENRE //

        function getMovieName(userMood, changeMood) {
            if (changeMood === "no") {
                switch (userMood) {
                    case "good":
                        return "The Truman Show";
                    case "loved":
                        return "Love Actually";
                    case "shitty":
                        return "Closer";
                    case "angry":
                        return "The Northman";
                    case "bored":
                        return "Her";
                    default:
                        return "Geen film gevonden"

                }

            } else if (changeMood === "yes") {
                switch (userMood) {
                    case "good":
                        return "The place beyond the pines";
                    case "loved":
                        return "Cherry";
                    case "shitty":
                        return "Kick-Ass";
                    case "angry":
                        return "School of Rock"
                    case "bored":
                        return "Baby Driver"
                    default:
                        return "Geen film gevonden"

                }
            }
        }


//  FILMTITEL + INFO OPHALEN //

        async function getMovie() {
            try {
                toggleLoading(true);
                toggleError(false);
                const result = await axios.get(`https://www.omdbapi.com/?apikey=${keyApi}&t=${getMovieName(userMood, changeMood)}`);
                console.log(result.data);
                setMovieResult(result.data);

            } catch (e) {
                console.error(e);
                toggleError(true);
            } finally {
                toggleLoading(false);

            }

        }

        getMovie()

    }, [userMood, changeMood]);


// PUT REQUEST TO ADD FILMRESULT TO USER-INFO

    async function saveResult() {
        try {
            const save = await axios.put('https://frontend-educational-backend.herokuapp.com/api/user/',
                {
                    "info": `${movieResult.imdbID}`
                },
                {
                    headers: {
                        'Content-Type': "application/json",
                        'Authorization': "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJib25uZTEyMyIsImlhdCI6MTY3Mzg5ODAyMiwiZXhwIjoxNjczOTg0NDIyfQ.xG7MrqJ-nrKYdeY4lhmk1za0sw6-rlqG2wEMzimHZY7TeZJ3GYq0HOQbX319Fz2TzuDtHSQYRkmzdu3mME1kvw"
                    }

                }
            )
            console.log(save)
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <div>
            <NavBar/>
            {loading && <p>Loading...</p>}
            {error && <p className="error-notification">Er is een fout opgetreden, probeer het opnieuw!</p>}
            {/*//FILM RESULTAAT*/}
            <div className="result" id="filmCard">
                <article className="result-text">
                    <h1>{movieResult.Title}</h1>
                    <p>{movieResult.Year}</p>
                    <p>Rated {movieResult.imdbRating} on IMDB!</p>
                </article>
                <img className="movie-poster" src={movieResult.Poster} alt="movieposter"/>
                <span className="movieposter-background"></span>
            </div>

            {/*//SHARE FILMRESULTAAT*/}
            <div className="film-result-tools">
                <a href={`https://www.imdb.com/title/${movieResult.imdbID}`} target={"blank"}>
                    <img
                        src={share}
                        alt="share result"
                        width="30"
                        className="activeShare"
                        id="shareButton"
                    />
                </a>
                <button onClick={saveResult}>Save result</button>

                {/*//RETRY FUNCTIE*/}
                <Link to="/start"> <img src={retry} alt="try again" width="30" className="activeReturn"/> </Link>
            </div>


        </div>
    );

}

export default FilmResult



