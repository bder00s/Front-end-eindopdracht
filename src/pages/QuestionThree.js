import React, {useState, createContext, useContext} from "react"
import Answer from "../Components/Answer";
import {Link, useHistory} from "react-router-dom";
import NavButton from "../Components/NavButton";
import NavBar from "../Components/NavBar";
import {appContext} from "../App";

// export const QuestionThreeContext = createContext({});

function QuestionThree() {
    const history = useHistory();

    const {changeMood, toggleChangeMood} = useContext(appContext);


    function handleSubmitThree(e) {
        e.preventDefault()
        //     console.log(`Vraag 3 beantwoord.
        // Wil mood veranderen: ${changeMood},
        // Wil mood niet veranderen: ${keepMood}
        // `)
        history.push("/result")
    }

    function onChangeQuestion3(e) {
        e.preventDefault();
        console.log(`Question 3 - change mood? = ${e.target.value}`)
        toggleChangeMood(e.target.value)
    }

    return (
        <div className="question-three">
            <header>
                <NavBar/>
            </header>
            <div className="question">
            <h3>Vraag 3</h3>
            <p>Wil je hier verandering in brengen?</p>
            </div>

            {/*//ANTWOORDEN*/}

            <form className="question-three" onSubmit={handleSubmitThree}>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="yes"
                            checked={changeMood === "yes"}
                            onChange={onChangeQuestion3}
                        />
                        Ja
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="no"
                            checked={changeMood === "no"}
                            onChange={onChangeQuestion3}
                        />
                        Nee
                    </label>
                </div>

                <Link to="/question-two">
                    <NavButton
                        buttonType="button"
                        buttonText="Vorige"
                    />
                </Link>

                <NavButton
                    buttonType="submit"
                    buttonText="Geef me een film!"
                    answerValues={true}
                />

            </form>

        </div>
    );


}

export default QuestionThree;