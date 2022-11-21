import React from "react"
import {Link, NavLink, useHistory} from "react-router-dom";
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
                        <Link to="/start" className="activeHomeButton">
                            <img src={homeIcon} className="home-icon" alt="homebutton"/>
                        </Link>
                    </li>
                    <li><img className="app-header" src={header} alt="app-header"/></li>
                    <li><Hamburger classname="activeHamburgerButton"/></li>

                </ul>
            </article>


        </>

    );
}

export default NavBar;