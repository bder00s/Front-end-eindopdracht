// https://www.youtube.com/watch?v=gAGcjlJyKk0&ab_channel=WebDevBasics
import React, {useState} from "react";
import hamburger from '../assets/Hamburger.svg'

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
                    <li>Tekst?</li>
                </ul>
            </div>

        </>
    )
}
export default Hamburger