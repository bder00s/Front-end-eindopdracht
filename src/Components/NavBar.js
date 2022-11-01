import React from "react"
import {Link, useHistory} from "react-router-dom";
import Hamburger from "./Hamburger"
import homeIcon from "../assets/home.svg"
import header from "../assets/headertext.svg"

function NavBar() {
    // const history = useHistory();

    // function homeButton() {
    //     history.push("/start")
    // }

    return (
        <div className="nav-bar">
            <nav>
                <p>hallo, test</p>
                <ul>
                    {/*DE HOMEBUTTON*/}
                    <li>
                        <Link to="/start">
                        <img
                        src={homeIcon} className="home-icon" alt="homebutton"/>
                        {/*onClick={homeButton}*/}
                        </Link>
                    </li>

                    {/*DE APP HEADER*/}
                    <li><img className="app-header" src={header} alt="app-header"/></li>

                        {/*HAMBURGER MENU*/}
                    {/*<li><Hamburger/></li>*/}
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;