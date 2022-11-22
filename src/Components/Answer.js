import React from 'react';

function Answer({answerId, answerName, answerValue, setAnswerValue, answerContent}){
    return (
        <div>
            <label id={answerId}>
                <input type="radio"
                       name={answerName}
                       value={answerValue}
                       id={answerId}
                       onChange={() => {setAnswerValue(!answerValue)
                console.log("test answer.js")}}

                    />
                {answerContent}</label>
        </div>
    );
};

export default Answer;