import React, {useContext, useEffect, useState} from "react"
import axios from "axios";
import share from "../assets/share.svg"
import retry from "../assets/test.png"
// import {QuestionTwoContext} from "./QuestionTwo";
// import {QuestionThreeContext} from "./QuestionThree";
import NavBar from "../Components/NavBar";
import {Link} from "react-router-dom";
import {appContext} from "../App";


//https://www.cluemediator.com/convert-html-element-or-document-into-image-in-react
// https://www.npmjs.com/package/html-to-image


const keyApi = process.env.REACT_APP_API_KEY



    function FilmResult() {

        const {userMood, changeMood} = useContext(appContext);

        const [movieResult, setMovieResult] = useState('');

        useEffect(() => {

            function questionData() {
                console.log(`UserMood = ${userMood}, ChangeMood = ${changeMood}`)
            }

            questionData()

            function getMovieName (userMood, changeMood) {
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
            ;

            async function getMovie() {
                try {
                    const result = await axios.get(`https://www.omdbapi.com/?apikey=${keyApi}&t=${getMovieName(userMood,changeMood)}`);
                    console.log(result.data);
                    setMovieResult(result.data);
                } catch (e) {
                    console.error(e);
                    console.log("Probeer het opnieuw")
                }

            }

            getMovie()


        }, [userMood, changeMood]);

        return (
            <div>
                <NavBar/>
                <div className="result">
                    <article className="result-text">
                    <h1>{movieResult.Title}</h1>
                    <p>{movieResult.Year}</p>
                    <p>Rated {movieResult.imdbRating} on IMDB!</p>
                    </article>
                    <img className="movie-poster" src={movieResult.Poster} alt="movieposter" />
                    <span className="movieposter-background"></span>
                </div>

                <div className="film-result-tools">
                    <img src={share} alt="share result" width="30" className="activeShare"/>
                    <Link to="/start"> <img src={retry} alt="try again" width="30" className="activeReturn"/> </Link>
                </div>

            </div>
        );

    }

    export default FilmResult



