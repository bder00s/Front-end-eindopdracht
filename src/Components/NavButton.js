import React from 'react';




function NavButton({buttonType,buttonText, answerValues, valueOne, valueTwo}) {
    return (
        <div>
            <button
                type={buttonType}
                disabled={!answerValues && (buttonText === "Volgende" || buttonText === "Geef me een film!")}
            >
                {buttonText}
        </button>
        </div>
    );
};

export default NavButton;