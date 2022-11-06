import {randomNumber} from "./randomNumber";
import React from "react";

export {getDramaMovie}

const dramaMovies = [
    "luckiest girl alive",
    "1917",
    "Spirited Away",
    "Titanic",
    "Closer",
    "Donnie Darko",
    "silver lining playbook",
    "Never let me go",
    "Cherry",
    "Life is Beautiful"]

function getDramaMovie() {
    const pickMovie = dramaMovies[randomNumber()]
    return pickMovie;
}

getDramaMovie()






