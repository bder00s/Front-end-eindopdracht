import React, {createContext, useState} from "react"
import AnswerMood from "../Components/AnswerMood";
import {Link, useHistory} from "react-router-dom";
import NavButton from "../Components/NavButton";
import NavBar from "../Components/NavBar";



export const QuestionTwoContext = createContext({});

function QuestionTwo() {


        const history = useHistory();

        const [mood, changeMood] = useState('')
        // const [checkedGreat, toggleCheckedGreat] = useState(false);
        // const [checkedLoved, toggleCheckedLoved] = useState(false);
        // const [checkedShitty, toggleCheckedShitty] = useState(false);
        // const [checkedAngry, toggleCheckedAngry] = useState(false);
        // const [checkedBored, toggleCheckedBored] = useState(false);




        function handleSubmitTwo(e) {
            e.preventDefault()
            console.log(`mood is: ${mood}`)
            console.log(e.target)
        //     console.log(`Vraag 2 beantwoord.
        // Ik voel me goed: ${checkedGreat},
        // Ik voel me geliefd: ${checkedLoved},
        // Ik voel me slecht: ${checkedShitty},
        // Ik voel me boos: ${checkedAngry},
        // Ik voel me verveeld: ${checkedBored},
        //
        // `)
            history.push("/question-three")
        }

            const contextData = {
                mood:mood

            }

            return (
                <QuestionTwoContext.Provider value={contextData}>
                    <div className="question-two">

                        <header>
                            <NavBar/>
                        </header>
                        <h3>Vraag 2</h3>
                        <p>Hoe voel je je?</p>

                        {/*//ANTWOORDEN*/}

                        <form className="question-two" onSubmit={handleSubmitTwo}>
                            <AnswerMood
                                answerId="great"
                                answerName="answer-question-two"
                                answerValue={mood}
                                setAnswerValue={changeMood}
                                answerContent="Goed"

                            />
                            <AnswerMood
                                answerId="loved"
                                answerName="answer-question-two"
                                answerValue={mood}
                                setAnswerValue={changeMood}
                                answerContent="Geliefd"
                            />
                            <AnswerMood
                                answerId="shitty"
                                answerName="answer-question-two"
                                answerValue={mood}
                                setAnswerValue={changeMood}
                                answerContent="Slecht"
                            />
                            <AnswerMood
                                answerId="angry"
                                answerName="answer-question-two"
                                answerValue={mood}
                                setAnswerValue={changeMood}
                                answerContent="Boos"
                            />
                            <AnswerMood
                                answerId="bored"
                                answerName="answer-question-two"
                                answerValue={mood}
                                setAnswerValue={changeMood}
                                answerContent="Verveeld"
                            />


                            {/*//NAVIGATIE BUTTONS*/}

                            <Link to="/question-one">
                                <NavButton
                                    buttonType="button"
                                    buttonText="Vorige"
                                />
                            </Link>

                            <NavButton buttonType="submit"
                                       buttonText="Volgende"
                                       answerValues={mood}/>

                        </form>


                    </div>
                 </QuestionTwoContext.Provider>
            );


}

export default QuestionTwo;