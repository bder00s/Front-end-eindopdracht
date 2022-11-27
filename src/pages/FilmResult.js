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
                    <h1>{movieResult.Title}</h1>
                    <h2>{movieResult.Year}</h2>
                    <h3>Rated {movieResult.imdbRating} on IMDB!</h3>
                    <img src={movieResult.Poster} alt="movieposter" width="100"/>
                </div>

                <article className="filmResultTools">

                    <img src={share} alt="share result" width="30"/>

                    <Link to="/start"> <img src={retry} alt="try again" width="30"/> </Link>

                </article>
            </div>
        );

    }

    export default FilmResult



