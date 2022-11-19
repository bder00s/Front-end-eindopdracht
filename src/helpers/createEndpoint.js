import {getDramaMovie} from "./getDramaMovie";
import {getComedyMovie} from "./getComedyMovie";
import {getActionMovie} from "./getActionMovie";
import {getAdventureMovie} from "./getAdventureMovie";


export function CreateEndpoint(genre) {
    let endPoint = genre
    if (genre === "comedy") {
        return endPoint = getComedyMovie()
    }
    if (genre === "drama") {
        return endPoint = getDramaMovie()
    }
    if (genre === "action") {
        return endPoint = getActionMovie()
    }
    if (genre === "adventure") {
        return endPoint = getAdventureMovie()
    }
}
