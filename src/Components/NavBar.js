import React from "react"
import {NavLink, useHistory} from "react-router-dom";
import Hamburger from "./Hamburger"
import home from "../assets/home.svg"
import header from "../assets/headertext.svg"

function NavBar() {
    const history = useHistory();

    function homeButton() {
        history.push("/start")
    }

    return (
        <div className="nav-bar">
            <nav>
                <ul>
                    {/*DE HOMEBUTTON*/}
                    <li>
                        <NavLink to="/start">
                        <img
                        src={home} classname="home-icon" alt="homebutton"
                        // onClick={homeButton}
                    />
                        </NavLink>
                    </li>

                    {/*DE APP HEADER*/}
                    <li><img className="app-header" src={header} alt="app-header"/></li>

                        {/*HAMBURGER MENU*/}
                    <li><Hamburger/></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;