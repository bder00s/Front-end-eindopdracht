import {randomNumber} from "./randomNumber";
import React, {useState} from "react";
import axios from "axios";


const keyApi = process.env.REACT_APP_API_KEY

function Drama() {


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


            } catch (e) {
                console.error(e);
            }
        return
getDramaMovie()

export default Drama







