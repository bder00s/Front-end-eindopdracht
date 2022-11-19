import {randomNumber} from "./randomNumber";
import React from "react";
export {getRomanceMovie}

const romanceMovies = [
    "500 days of summer",
    "the Age of Adaline",
    "20th Century Girl",
    "Forest Gump",
    "Crazy stupid love",
    "Love Actually",
    "About Time",
    "Stardust",
    "Eternal sunshine",
    "Her" ]

function getRomanceMovie() {
    const pickMovie = romanceMovies[randomNumber()]
    return pickMovie;
}

getRomanceMovie()