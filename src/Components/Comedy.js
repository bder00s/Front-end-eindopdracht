import React, {useState} from 'react';
import {randomNumber} from "../helpers/randomNumber";
import axios from "axios";
import NavBar from "./NavBar";
import share from "../assets/share.svg";
import retry from "../assets/test.png";

export const Comedy = () => {
    const keyApi = process.env.REACT_APP_API_KEY
    const [comedyMovie, setComedyMovie] = useState('')

    const comedyMovies = [
        "School of Rock",
        "Dark shadows",
        "I care a lot",
        "Between two ferns",
        "Rat race",
        "Kick-ass",
        "Clueless",
        "Ted",
        "Bad teacher",
        "the Truman show"]

    function getComedyMovie() {
        const pickMovie = comedyMovies[randomNumber()]
        return pickMovie;

        async function getMovie() {
            try {
                const result = await axios.get(`https://www.omdbapi.com/?apikey=${keyApi}&t=${pickMovie}`);
                console.log(result.data);
                setComedyMovie(result.data);


            } catch (e) {
                console.error(e);
            }
            getComedyMovie()

            return (
                <div>
                    <NavBar/>
                    <div className="result">
                        <h1>{comedyMovie.Title}</h1>
                        <h2>{comedyMovie.Year}</h2>
                        <h3>Rated {comedyMovie.imdbRating} on IMDB!</h3>
                        <img src={comedyMovie.Poster} alt="movieposter" width="100"/>
                    </div>

                    <article className="filmResultTools">
                        <img src={share} alt="share result" width="30"/>
                        <img src={retry} alt="try again" width="30"/>

                    </article>
                </div>
            );
        };
    }}

