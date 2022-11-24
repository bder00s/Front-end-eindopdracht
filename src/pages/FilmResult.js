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

    const [movieResult, setMovieResult] = useState('')

    useEffect(() => {

        async function getMovie() {

            function movie(searchMovie) {
                console.log(`UserMood = ${userMood}, ChangeMood = ${changeMood}`)
            }

            //     if (checkedGreat && keepMood) {
            //         return searchMovie = "Kick-ass"
            //     }
            //     if (checkedGreat && changeMood) {
            //         return searchMovie = "The place beyond the pines"
            //     }
            //     if (checkedLoved && keepMood) {
            //         return searchMovie = "Love Actually"
            //     }
            //     if (checkedLoved && changeMood) {
            //         return searchMovie = "Cherry"
            //     }
            //     if (checkedShitty && keepMood) {
            //         return searchMovie = "Closer"
            //     }
            //     if (checkedShitty && changeMood) {
            //         return searchMovie = "The Truman show"
            //     }
            //     if (checkedAngry && keepMood) {
            //         return searchMovie = "the Northman"
            //     }
            //     if (checkedAngry && changeMood) {
            //         return searchMovie = "School of Rock"
            //     }
            //     if (checkedBored && keepMood) {
            //         return searchMovie = "Her"
            //     }
            //     if (checkedBored && changeMood) {
            //         return searchMovie = "Guardians of the Galaxy"
            //     }
            //     return "Bonne";

            movie()
        }

        getMovie()


        // try {
        //     const result = await axios.get(`https://www.omdbapi.com/?apikey=${keyApi}&t=${ }`);
        //     console.log(result.data);
        //     setMovieResult(result.data);
        //
        //
        // } catch (e) {
        //     console.error(e);
        // }

    }, []);


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