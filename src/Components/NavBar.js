import React from "react"
import {Link, useHistory} from "react-router-dom";
import Hamburger from "./Hamburger"
import homeIcon from "../assets/home.svg"
import header from "../assets/headertext.svg"
import hamburger from "../assets/Hamburger.svg"

function NavBar() {


    return (
        <>
            <article className="nav-bar">
                <ul>
                    <li>
                        <Link to="/start">
                            <img src={homeIcon} className="home-icon" alt="homebutton"/>
                        </Link>
                    </li>
                    <li><img className="app-header" src={header} alt="app-header"/></li>
                    <li><img className="hamburger" src={hamburger} alt="hamburger-menu"/></li>
                </ul>
            </article>


        </>

    );
}

export default NavBar;