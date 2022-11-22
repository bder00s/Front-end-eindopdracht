import React from 'react';

function AnswerMood({answerId, answerName, answerValue, setAnswerValue, answerContent}){
    return (
        <div>
            <label id={answerId}>
                <input type="radio"
                       name={answerName}
                       value={answerValue}
                       id={answerId}
                       onChange={() => {
                           setAnswerValue(answerId)
                          console.log("test")
                       }}
                />
                {answerContent}</label>
        </div>
    );
};

export default AnswerMood;