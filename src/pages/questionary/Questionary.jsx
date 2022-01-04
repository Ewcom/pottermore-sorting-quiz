import React, { useState } from 'react'
import { Question1 } from '../../components/questions/Question1'
import { Question2 } from '../../components/questions/Question2'
import { Question3 } from '../../components/questions/Question3'
import { Question4 } from '../../components/questions/Question4'
import { Question5 } from '../../components/questions/Question5'
import { Question6 } from '../../components/questions/Question6'
import { Question7 } from '../../components/questions/Question7'
import { Question8 } from '../../components/questions/Question8'

export const Questionary = () => {


    //# of the current question 1-7
    const [questionPos, setQuestionPos] = useState(1)
    const [questionsArray, setQuestionsArray] = useState([1, 2, 3, 4, 5, 6, 7])


    switch (questionPos) {

        case 1:
            return (
                <>

                    <Question1 setQuestionPos={setQuestionPos} questionsArray={questionsArray} setQuestionsArray={setQuestionsArray} />
                </>
            )

        case 2:

            return (
                <>
                    <Question2 setQuestionPos={setQuestionPos} questionsArray={questionsArray} setQuestionsArray={setQuestionsArray} />
                </>
            )

        case 3:

            return (
                <>
                    <Question3 setQuestionPos={setQuestionPos} questionsArray={questionsArray} setQuestionsArray={setQuestionsArray} />
                </>
            )

        case 4:

            return (
                <>
                    <Question4 setQuestionPos={setQuestionPos} questionsArray={questionsArray} setQuestionsArray={setQuestionsArray} />
                </>
            )

        case 5:

            return (
                <>
                    <Question5 setQuestionPos={setQuestionPos} questionsArray={questionsArray} setQuestionsArray={setQuestionsArray} />
                </>
            )


        case 6:

            return (
                <>
                    <Question6 setQuestionPos={setQuestionPos} questionsArray={questionsArray} setQuestionsArray={setQuestionsArray} />
                </>
            )

        case 7:

            return (
                <>
                    <Question7 setQuestionPos={setQuestionPos} questionsArray={questionsArray} setQuestionsArray={setQuestionsArray} />
                </>
            )

        case 8:

            return (
                <>
                    <Question8 setQuestionPos={setQuestionPos} questionsArray={questionsArray} setQuestionsArray={setQuestionsArray} />
                </>
            )

        default:
            break;


    }

}
