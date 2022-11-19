import React, {useState} from 'react';

function CatchAnswers({answersOne, answersTwo, answersThree }) {
    const [resultOne, setResultOne] = useState('');
    const [resultTwo, setResultTwo] = useState('');
    const [resultThree, setResultThree] = useState('')



    function answersOneToResult() {
        setResultOne(answersOne)
        return {resultOne}
    }

    function answersTwoToResult() {
        setResultTwo(answersTwo)
        return {resultTwo}
    }

    function answersThreeToResult() {
        setResultThree(answersThree)
        return resultThree
    }

    return (
        <div>

        </div>
    );
};

export default CatchAnswers;