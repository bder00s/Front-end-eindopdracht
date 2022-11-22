import React, {createContext, useState} from "react"
import Answer from "../Components/Answer";
import {Link, useHistory} from "react-router-dom";
import NavButton from "../Components/NavButton";
import NavBar from "../Components/NavBar";



export const QuestionTwoContext = createContext({});

function QuestionTwo() {


        const history = useHistory();

        const [checkedGreat, toggleCheckedGreat] = useState(false);
        const [checkedLoved, toggleCheckedLoved] = useState(false);
        const [checkedShitty, toggleCheckedShitty] = useState(false);
        const [checkedAngry, toggleCheckedAngry] = useState(false);
        const [checkedBored, toggleCheckedBored] = useState(false);




        function handleSubmitTwo(e) {
            e.preventDefault()

            console.log(`Vraag 2 beantwoord.
        Ik voel me goed: ${checkedGreat},
        Ik voel me geliefd: ${checkedLoved},
        Ik voel me slecht: ${checkedShitty},
        Ik voel me boos: ${checkedAngry},
        Ik voel me verveeld: ${checkedBored},
       
        `)
            history.push("/question-three")
        }

            const contextData = {
                checkedGreat: checkedGreat,
                checkedLoved: checkedLoved,
                checkedShitty: checkedShitty,
                checkedAngry: checkedAngry,
                checkedBored: checkedBored,

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
                            <Answer
                                answerId="great"
                                answerName="answer-question-two"
                                answerValue={checkedGreat}
                                setAnswerValue={toggleCheckedGreat}
                                answerContent="Goed"

                            />
                            <Answer
                                answerId="loved"
                                answerName="answer-question-two"
                                answerValue={checkedLoved}
                                setAnswerValue={toggleCheckedLoved}
                                answerContent="Geliefd"
                            />
                            <Answer
                                answerId="shitty"
                                answerName="answer-question-two"
                                answerValue={checkedShitty}
                                setAnswerValue={toggleCheckedShitty}
                                answerContent="Slecht"
                            />
                            <Answer
                                answerId="angry"
                                answerName="answer-question-two"
                                answerValue={checkedAngry}
                                setAnswerValue={toggleCheckedAngry}
                                answerContent="Boos"
                            />
                            <Answer
                                answerId="bored"
                                answerName="answer-question-two"
                                answerValue={checkedBored}
                                setAnswerValue={toggleCheckedBored}
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
                                       answerValues={checkedGreat || checkedLoved || checkedShitty || checkedAngry || checkedBored }/>

                        </form>


                    </div>
                </QuestionTwoContext.Provider>
            );


}

export default QuestionTwo;