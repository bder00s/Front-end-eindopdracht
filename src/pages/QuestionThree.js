import React, {useState, createContext} from "react"
import Answer from "../Components/Answer";
import {Link, useHistory} from "react-router-dom";
import NavButton from "../Components/NavButton";
import NavBar from "../Components/NavBar";


export const QuestionThreeContext = createContext({});

function QuestionThree() {



        const history = useHistory();
        const [changeMood, toggleChangeMood] = useState(false);
        const [keepMood, toggleKeepMood] = useState(false);


        function handleSubmitThree(e) {
            e.preventDefault()
            console.log(`Vraag 3 beantwoord.
        Wil mood veranderen: ${changeMood},
        Wil mood niet veranderen: ${keepMood}
        `)
            history.push("/result")
        }

            const contextData = {
                changeMood: changeMood,
                keepMood: keepMood,


            }

            return (
                <QuestionThreeContext.Provider value={contextData}>
                    <div className="question-three">
                        <header>
                            <NavBar/>
                        </header>
                        <h3>Vraag 3</h3>
                        <p>Wil je hier verandering in brengen?</p>

                        {/*//ANTWOORDEN*/}

                        <form className="question-three" onSubmit={handleSubmitThree}>
                            <Answer
                                answerId="yes"
                                answerName="question-three"
                                answerValue={changeMood}
                                setAnswerValue={toggleChangeMood}
                                answerContent="Ja"
                            />
                            <Answer
                                answerId="no"
                                answerName="question-three"
                                answerValue={keepMood}
                                setAnswerValue={toggleKeepMood}
                                answerContent="Nee"
                            />

                            <Link to="/question-two">
                                <NavButton
                                    buttonType="button"
                                    buttonText="Vorige"

                                />
                            </Link>

                            <NavButton buttonType="submit"
                                       buttonText="Geef me een film!"
                                       answerValues={changeMood || keepMood}
                            />

                        </form>

                    </div>
                </QuestionThreeContext.Provider>
            );


}

export default QuestionThree;