import React, {useContext, useEffect, useState} from "react"
import axios from "axios";
import {Drama} from "../Components/Drama";
import share from "../assets/share.svg"
import retry from "../assets/test.png"
import {QuestionTwoContext} from "./QuestionTwo";
import {QuestionThreeContext} from "./QuestionThree";
import NavBar from "../Components/NavBar";


const keyApi = process.env.REACT_APP_API_KEY


function FilmResult() {
    const {checkedGreat} = useContext(QuestionTwoContext);
    const {checkedLoved} = useContext(QuestionTwoContext);
    const {checkedShitty} = useContext(QuestionTwoContext);
    const {checkedAngry} = useContext(QuestionTwoContext);
    const {checkedBored} = useContext(QuestionTwoContext);
    const {changeMood} = useContext(QuestionThreeContext);
    const {keepMood} = useContext(QuestionThreeContext);


//     function chooseGenre(genre) {
//         switch (genre) {
//             case checkedGreat && keepMood :
//
//                 break;
//             case checkedGreat && changeMood:
//                 getDramaMovie()
//                 break;
//             case checkedLoved && keepMood :
//                 getRomanceMovie()
//                 break;
//             case checkedLoved && changeMood :
//                 getActionMovie()
//                 break;
//             case checkedShitty && keepMood :
//                 getDramaMovie()
//                 break;
//             case checkedShitty && changeMood :
//                 getComedyMovie()
//                 break;
//             case checkedAngry && keepMood :
//                 getActionMovie()
//                 break;
//             case checkedAngry && changeMood :
//                 getComedyMovie();
//                 break;
//             case checkedBored && keepMood :
//                 getRomanceMovie()
//                 break;
//             case checkedBored && changeMood :
//                 getAdventureMovie()
//                 break;
//             default: console.log("geen genre kunnen kiezen")
//         }
//     }
//
//
// chooseGenre()

// const [filmResult, setFilmResult] = useState('');
//
//     useEffect(() => {
//
//
//
// }, []);


  return (
    <div>

        <Drama />

    </div>


);
}



export default FilmResult;