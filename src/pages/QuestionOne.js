import React, {useState, createContext} from "react"
import {Link, useHistory} from "react-router-dom";
import Answer from "../Components/Answer";
import NavButton from "../Components/NavButton";
import homeIcon from "../assets/home.svg";
import header from "../assets/headertext.svg";
import NavBar from "../Components/NavBar";

function QuestionOne() {
    const [checkedGood, toggleCheckedGood] = useState(false);
    const [checkedBad, toggleCheckedBad] = useState(false);

    const history = useHistory();

    function handleSubmitOne(e) {
        e.preventDefault()
        console.log(`Vraag 1 beantwoord.
        Ik voel me goed ${checkedGood}
        Ik voel me slecht ${checkedBad}`)
        history.push("/question-two")
    }

    return (
        <div className="question-one">
            <header>
                <NavBar/>
            </header>
            <h3>Vraag 1</h3>
            <p>Hoe is je dag?</p>

            {/*//ANTWOORDEN*/}

            <form className="question-one"
                  onSubmit={handleSubmitOne}>
                <Answer
                    answerId="good"
                    answerName="answer-question-one"
                    answerValue={checkedGood}
                    answerContent="😀"
                    setAnswerValue={toggleCheckedGood}

                />

                <Answer
                    answerId="bad"
                    answerName="answer-question-one"
                    answerValue={checkedBad}
                    answerContent="☹️"
                    setAnswerValue={toggleCheckedBad}
                />

                {/*//NAVIGATIE BUTTONS*/}

                <Link to="/start">
                    <NavButton
                        buttonType="button"
                        buttonText="Vorige"
                    />
                </Link>

                <NavButton
                    buttonType="submit"
                    buttonText="Volgende"
                    answerValues={checkedGood || checkedBad}
                />

            </form>

        </div>
    );
}

export default QuestionOne;