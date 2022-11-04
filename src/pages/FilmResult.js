import React, {useEffect, useState} from "react"
import axios from "axios";
import {getDramaMovie} from "../helpers/getDramaMovie";


// const apiKey = process.env.REACT_APP_API_KEY
const apiKey = "955bd41a"

function Result() {

        const [filmResult, setFilmResult] = useState('');
    useEffect(() => {

        // async function getMovie() {
        //     try {
        //         const result = await axios.get(`https://imdb-api.com/en/API/Keyword/${apiKey}/fantasy `);
        //         console.log(result.data);
        //         // setFilmResult(result.data.items[0])
        //
        //     } catch (e) {
        //         console.error(e);
        //     }
        // }
        //
        // getMovie()


        async function getMovie() {
            try {
                const result = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&t=${getDramaMovie()}`);
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