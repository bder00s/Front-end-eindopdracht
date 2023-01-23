import React, {useContext} from "react"
import {Link, useHistory} from "react-router-dom";
import NavButton from "../Components/NavButton";
import homeIcon from "../assets/home.svg";
import header from "../assets/headertext.svg";
import NavBar from "../Components/NavBar";
import {appContext} from "../App";

function QuestionOne() {
    const {userDay, changeUserDay} = useContext(appContext);

    const history = useHistory();

    function handleSubmitOne(e) {
        e.preventDefault()
        history.push("/question-two")
    }

    function onChangeQuestion1(e) {
        e.preventDefault();
        changeUserDay(e.target.value)
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

            <form className="question-one-form" onSubmit={handleSubmitOne}>

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


                {/*//NAVIGATIE BUTTONS*/}
                <div className="nav-button-container">
                    <Link to="/start">
                        <NavButton
                            buttonType="button"
                            buttonText="Vorige"
                        />
                    </Link>

                    <NavButton
                        buttonType="submit"
                        buttonText="Volgende"
                        answerValues={userDay}
                    />
                </div>

            </form>

        </div>
    );
}

export default QuestionOne;