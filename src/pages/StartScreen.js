import React from "react"
import logo from "../assets/logo2.png"
import {Link} from "react-router-dom";

function StartScreen() {
    return (
        <div className="start">
          <img src={logo} className="main-logo" alt="logo"/>
            <Link to="/question-one"> <h1>Start hier!</h1></Link>


        </div>
    );
}

export default StartScreen;