// https://www.youtube.com/watch?v=gAGcjlJyKk0&ab_channel=WebDevBasics
import React, {useState} from "react";
import hamburger from '../assets/Hamburger.svg'
import moviehistoryButton from '../assets/moviehistory.svg'
import loginLogout from '../assets/login.svg'
import {Link} from "react-router-dom";

const Hamburger = () => {
    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
    const [menuClass, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible");
        } else {
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden");
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <>
            <nav>

                <div className="burger-menu" onClick={updateMenu}>
                    <img src={hamburger} alt="hamburgermenu" className={burgerClass}/>

                </div>

            </nav>

            <div className={menuClass}>
                <ul className="menubar">
                    <li>
                        <Link to="/movie-history" className="activeHistoryButton">
                        <img src={moviehistoryButton} className="history-icon"  alt="Movie history"/>
                    </Link>
                        Movie
                        History
                    </li>
                    <li>
                        <Link to="/" className="activeLoginButton">
                        <img src={loginLogout} className="login-icon" alt="Login or logout button"/>
                    </Link>
                        Login/
                        Logout
                    </li>
                </ul>
            </div>

        </>
    )
}
export default Hamburger