import React from 'react';


function NavButton({buttonType, buttonText, answerValues}) {
    return (

            <button className="nav-button"
                type={buttonType}
                disabled={!answerValues && (buttonText === "Volgende" || buttonText === "Geef me een film!")}
            >
                {buttonText}
            </button>

    );
};

export default NavButton;