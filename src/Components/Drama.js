import React, {useState} from 'react';
import {randomNumber} from "../helpers/randomNumber";
import axios from "axios";
import NavBar from "./NavBar";
import share from "../assets/share.svg";
import retry from "../assets/test.png";

export const Drama = () => {
    const keyApi = process.env.REACT_APP_API_KEY
    const [dramaMovie, setDramaMovie] = useState('')


    function getDramaMovie() {
    const dramaMovies = [
            "luckiest girl alive",
            "1917",
            "Spirited Away",
            "Titanic",
            "Closer",
            "Donnie Darko",
            "silver lining playbook",
            "Never let me go",
            "The place beyond the pines",
            "Life is Beautiful"]
        const pickMovie = dramaMovies[randomNumber()]
        return pickMovie;

        async function getMovie() {
            try {
                const result = await axios.get(`https://www.omdbapi.com/?apikey=${keyApi}&t=${pickMovie}`);
                console.log(result.data);
                setDramaMovie(result.data);


            } catch (e) {
                console.error(e);
            }
            getDramaMovie()

            return (
                <div>
                    <NavBar/>
                    <div className="result">
                        <h1>{dramaMovie.Title}</h1>
                        <h2>{dramaMovie.Year}</h2>
                        <h3>Rated {dramaMovie.imdbRating} on IMDB!</h3>
                        <img src={dramaMovie.Poster} alt="movieposter" width="100"/>
                    </div>

                    <article className="filmResultTools">
                        <img src={share} alt="share result" width="30"/>
                        <img src={retry} alt="try again" width="30"/>

                    </article>
                </div>
            );
        };
    }}

