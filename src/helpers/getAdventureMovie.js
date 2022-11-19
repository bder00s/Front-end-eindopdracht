import {randomNumber} from "./randomNumber";
import React from "react";
export {getAdventureMovie}

const adventureMovies = [
    "Jumanji: into the jungle",
    "Everything everywhere all at once",
    "Interstellar",
    "Dune",
    "Ready Player one",
    "Aquaman",
    "King kong",
    "Guardians of the galaxy",
    "E.T.",
    "the Chronicles of Narnia: the lion"]

function getAdventureMovie() {
    const pickMovie = adventureMovies[randomNumber()]
    return pickMovie;
}

getAdventureMovie()