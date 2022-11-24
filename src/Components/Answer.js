import React from 'react';

function Answer({answerId, answerName, answerValue, setAnswerValue, answerContent}) {

    console.log(`Creating answer Component ${answerId} with ${answerValue}`)

    return (
        <div>
            <label id={answerId}>
                <input
                    type="radio"
                    name={answerName}
                    value={answerValue}
                    id={answerId}
                    onChange={(event) => {
                        console.log(`Event value = ${event.target.value}`)
                        console.log(`Setting answer ${answerId} to ${!answerValue}`)
                        setAnswerValue(!answerValue)
                    }}
                />
                {answerContent}
            </label>
        </div>

    );
};

export default Answer;