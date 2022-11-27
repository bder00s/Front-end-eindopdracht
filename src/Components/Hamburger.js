// https://www.youtube.com/watch?v=gAGcjlJyKk0&ab_channel=WebDevBasics
import React, {useContext, useState} from "react";
import hamburger from '../assets/Hamburger.svg'
import moviehistoryButton from '../assets/moviehistory.svg'
import loginLogout from '../assets/login.svg'
import homeEmpty from "../assets/HomeButtonUnfilled.svg";
import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {useHistory} from "react-router-dom";


const Hamburger = () => {
    const history = useHistory();
    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
    const [menuClass, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const {isAuth, login, logout} = useContext(AuthContext);

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
                            <img src={moviehistoryButton} className="history-icon" alt="Movie history"/>
                        </Link>
                        Movie
                        History
                    </li>

                    {isAuth.isAuth ?
                        <div onClick={logout}>
                            <Link to="/" className="activeLoginButton">
                                <img src={loginLogout} className="login-icon" alt="Login or logout button"/>
                            </Link>
                            Logout
                        </div>
                        :
                        <div className="loginLogoutButton" onClick={() => history.push('/')}>
                            <Link to="/" className="activeLoginButton">
                                <img src={loginLogout} className="login-icon" alt="Login or logout button"/>
                            </Link>Login
                        </div>}

                    <li><Link to="/start" className="activeHome-iconE">
                        <img src={homeEmpty} className="home-iconE" alt="homebutton"/></Link>Home
                    </li>
                </ul>
            </div>

        </>
    )
}
export default Hamburger