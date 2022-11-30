import React, {createContext, useState, useContext} from "react"
import {Link, useHistory} from "react-router-dom";
import NavButton from "../Components/NavButton";
import NavBar from "../Components/NavBar";
import {appContext} from "../App";


function QuestionTwo() {
    const history = useHistory();

    const {userMood, changeUserMood} = useContext(appContext);

    function handleSubmitTwo(e) {
        e.preventDefault()
        console.log(`Vraag 2 beantwoord:
        Huidige mood van gebruiker is: ${userMood}`)
        history.push("/question-three")
    }

    function onChangeQuestion2(e) {
        e.preventDefault();
        console.log(`Question 2 selection: ${e.target.value}`);
        changeUserMood(e.target.value)
    }

    return (

        <div className="question-two">

            <header>
                <NavBar/>
            </header>
            <div className="question">
            <h3>Vraag 2</h3>
            <p>Hoe voel je je?</p>
            </div>

            {/*//ANTWOORDEN*/}

            <form className="question-two" onSubmit={handleSubmitTwo}>

                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="good"
                            checked={userMood === "good"}
                            onChange={onChangeQuestion2}
                        />
                         Goed
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="loved"
                            checked={userMood === "loved"}
                            onChange={onChangeQuestion2}
                        />
                         Geliefd
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="shitty"
                            checked={userMood === "shitty"}
                            onChange={onChangeQuestion2}
                        />
                        Slecht
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="angry"
                            checked={userMood === "angry"}
                            onChange={onChangeQuestion2}
                        />
                        Boos
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="bored"
                            checked={userMood === "bored"}
                            onChange={onChangeQuestion2}
                        />
                        Verveeld
                    </label>
                </div>

                {/*//NAVIGATIE BUTTONS*/}
                <div className="nav-button-container">

                <Link to="/question-one">
                    <NavButton className="nav"
                        buttonType="button"
                        buttonText="Vorige"
                    />
                </Link>

                <NavButton buttonType="submit"
                           buttonText="Volgende"
                           answerValues={userMood}
                />
                </div>
            </form>

        </div>
    );


}

export default QuestionTwo;