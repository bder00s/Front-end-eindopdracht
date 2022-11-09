import React, {useContext, useEffect, useState} from "react"
import axios from "axios";
import {getDramaMovie} from "../helpers/getDramaMovie";
import {getActionMovie} from "../helpers/getActionMovie";
import {getRomanceMovie} from "../helpers/getRomanceMovie";
import {getComedyMovie} from "../helpers/getComedyMovie";
import {getAdventureMovie} from "../helpers/getAdventureMovie";
import share from "../assets/share.svg"
import retry from "../assets/test.png"
import {QuestionTwoContext} from "./QuestionTwo";
import {QuestionThreeContext} from "./QuestionThree";


const keyApi = process.env.REACT_APP_API_KEY


function Result() {
    const {checkedGreat} = useContext(QuestionTwoContext);
    const {checkedLoved} = useContext(QuestionTwoContext);
    const {checkedShitty} = useContext(QuestionTwoContext);
    const {checkedAngry} = useContext(QuestionTwoContext);
    const {checkedBored} = useContext(QuestionTwoContext);
    const {changeMood} = useContext(QuestionThreeContext);
    const {keepMood} = useContext(QuestionThreeContext);

    function chooseGenre() {
        const genre = undefined;
        switch (genre) {
            case    checkedGreat && keepMood :
                return getComedyMovie();
            case checkedGreat && changeMood:
                return getDramaMovie();
            case checkedLoved && keepMood :
                return getRomanceMovie();
            case checkedLoved && changeMood :
                return getActionMovie();
            case checkedShitty && keepMood :
                return getDramaMovie();
            case checkedShitty && changeMood :
                return getComedyMovie();
            case checkedAngry && keepMood :
                return getActionMovie();
            case checkedAngry && changeMood :
                return getComedyMovie();
            case checkedBored && keepMood :
                return getRomanceMovie();
            case checkedBored && changeMood :
                return getAdventureMovie();
            default: console.log("geen genre kunnen kiezen")
        }
    }

    const [filmResult, setFilmResult] = useState('');
    useEffect(() => {

        async function getMovie() {
            try {
                const result = await axios.get(`https://www.omdbapi.com/?apikey=${keyApi}&t=${chooseGenre()}`);
                console.log(result.data);
                setFilmResult(result.data)

            } catch (e) {
                console.error(e);
            }
        }

        getMovie()
    }, []);


    return (
        <>
            <div className="result">
                <h1>{filmResult.Title}</h1>
                <h2>{filmResult.Year}</h2>
                <h3>Rated {filmResult.imdbRating} on IMDB!</h3>
                <img src={filmResult.Poster} alt="movieposter" width="100"/>
            </div>

            <article className="filmResultTools">
                <img src={share} alt="share result" width="30"/>
                <img src={retry} alt="try again" width="30"/>

            </article>


        </>
    );
}


export default Result;