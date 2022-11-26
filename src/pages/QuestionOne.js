import React, {useState, createContext} from "react"
import {Link, useHistory} from "react-router-dom";
import Answer from "../Components/Answer";
import NavButton from "../Components/NavButton";
import homeIcon from "../assets/home.svg";
import header from "../assets/headertext.svg";
import NavBar from "../Components/NavBar";

function QuestionOne() {
    const [userDay, setUserDay] = useState('');

    const history = useHistory();

    function handleSubmitOne(e) {
        e.preventDefault()
        // console.log(`Vraag 1 beantwoord.
        // // Ik voel me goed ${userDay}
        // // Ik voel me slecht ${userDay}`)
        history.push("/question-two")
    }

    function onChangeQuestion1(e) {
        e.preventDefault();
        console.log(`Question 1 selection = ${e.target.value}`);
        setUserDay(e.target.value)
    }


    return (
        <div className="question-one">
            <header>
                <NavBar/>
            </header>
            <div className="question">
                <h3>Vraag 1</h3>
                <p>Hoe is je dag?</p>
            </div>

            {/*//ANTWOORDEN*/}

            <form className="question-one-form"
                  onSubmit={handleSubmitOne}>


                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="good-day"
                            checked={userDay === "good-day"}
                            onChange={onChangeQuestion1}/>
                        😀
                    </label>
                </div>


                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="bad-day"
                            checked={userDay === "bad-day"}
                            onChange={onChangeQuestion1}/>
                        ️️☹️
                    </label>
                </div>

                {/*<Answer*/}
                {/*    answerId="bad"*/}
                {/*    answerName="answer-question-one"*/}
                {/*    answerValue={checkedBad}*/}
                {/*    answerContent="☹"*/}
                {/*    setAnswerValue={toggleCheckedBad}*/}
                {/*/>*/}

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
                    answerValues={true}
                />

            </form>

        </div>
    );
}

export default QuestionOne;