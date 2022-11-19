import {randomNumber} from "./randomNumber";
import React from "react";
export {getComedyMovie}

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
}

getComedyMovie()