import {randomNumber} from "./randomNumber";
import React from "react";
export {getDramaMovie}



//
const dramaMovies = ["luckiest girl alive", "1917", "Spirited Away", "Titanic", "Closer", "Donnie Darko", "silver lining playbook"]

function getDramaMovie() {
    const pickMovie = dramaMovies[randomNumber()]
return pickMovie;
}

getDramaMovie()






