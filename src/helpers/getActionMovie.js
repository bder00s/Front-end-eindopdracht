import {randomNumber} from "./randomNumber";
import React from "react";
export {getActionMovie}

const actionMovies = [
    "2012",
    "Last seen alive",
    "Blade Runner 2049",
    "Baby Driver",
    "Fight Club",
    "Cherry",
    "Promising Young woman",
    "Pulp Fiction",
    "Drive",
    "the Northman"]

function getActionMovie() {
    const pickMovie = actionMovies[randomNumber()]
    return pickMovie;
}

getActionMovie()
