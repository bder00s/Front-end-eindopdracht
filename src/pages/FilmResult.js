import React, {useEffect, useState} from "react"
import axios from "axios";
import {getDramaMovie} from "../helpers/getDramaMovie";
import {getActionMovie} from "../helpers/getActionMovie";
import {getRomanceMovie} from "../helpers/getRomanceMovie";
import {getComedyMovie} from "../helpers/getComedyMovie";
import {getAdventureMovie} from "../helpers/getAdventureMovie";


const keyApi = process.env.REACT_APP_API_KEY


function Result() {

        const [filmResult, setFilmResult] = useState('');
    useEffect(() => {

        async function getMovie() {
            try {
                const result = await axios.get(`https://www.omdbapi.com/?apikey=${keyApi}&t=${getAdventureMovie()}`);
                console.log(result.data);
              setFilmResult(result.data)

            } catch (e) {
                console.error(e);
            }
        }
       getMovie()
    }, []);



    return (
        <div className="result">
         <h1>{filmResult.Title}</h1>
         <h2>{filmResult.Year}</h2>
        <h3>Rated {filmResult.imdbRating} on IMDB!</h3>
            <img src={filmResult.Poster} alt="movieposter" width="100"/>

        </div>


    );
}



export default Result;