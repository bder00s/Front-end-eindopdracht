import React from "react"
import logo from "../assets/logo2.png"
import {Link} from "react-router-dom";
import Hamburger from "../Components/Hamburger";
import startLogo from "../assets/startLogo.png"



function StartScreen() {

    return (
        <div className="start">
         <article>
             <img src={logo} className="main-logo" alt="logo"/> <Hamburger/>
         </article>
            <Link to="/question-one" className="activeStartButton">
            <img src={startLogo}  alt="Start button"  className="startButton"/>
            </Link>



        </div>
    );
}

export default StartScreen;