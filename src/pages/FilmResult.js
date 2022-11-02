import React, {useState} from "react"
import axios from "axios";


const apiKey = process.env.REACT_APP_API_KEY

function Result() {
    const [filmResult, setFilmResult] = useState('');

    async function getMovie() {
        try {
            const result = await axios.get(`https://imdb-api.com/en/API/Keyword/${apiKey}/west `);
            console.log(result.data);
            setFilmResult(result.data.items[0])

        } catch (e) {
            console.error(e);
        }
    }

    getMovie()

    return (
        <div className="result">
            <h1>{filmResult.title}</h1>
            <h2>{filmResult.year}</h2>
            <h3>IMDB Rating</h3>
            <img src={filmResult.image} alt="movie-poster" width="100"/>

        </div>
    );
}

export default Result;