import React, { useContext, useState, useEffect } from 'react'
import { pointsContext } from '../../context/pointsContext'
import './question.scss'

export const Question1 = ({ setQuestionPos, questionsArray, setQuestionsArray }) => {

    const [nextQuestionId, setNextQuestionId] = useState(null)

    //QUESTION #1

    //possible questions

    // (0) dawn/dusk
    // (1) forest/river
    // (2) Moon/stars


    useEffect(() => {

        //generate questions set id when render
        setChosenSet(Math.floor(Math.random() * 3))

        //generate next id of question
        setNextQuestionId(Math.floor(Math.random() * (questionsArray.length - 1)))
        //delete current id from array
        setQuestionsArray(oldArray => oldArray.filter((item) => { return item !== 1 }))



    }, []);

    const { contextPoints, setContextPoints } = useContext(pointsContext)

    //selected option hook
    const [chosenSet, setChosenSet] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)


    function modifyPoints(gryffindor, ravenclaw, hufflepuff, slytherin) {
        setContextPoints({
            gryffindorScore: contextPoints.gryffindorScore + gryffindor,
            ravenclawScore: contextPoints.ravenclawScore - ravenclaw,
            hufflepuffScore: contextPoints.hufflepuffScore - hufflepuff,
            slytherinScore: contextPoints.slytherinScore + slytherin,

        })

    }




    //change selection onclick handler
    function selectOption(option) {
        setSelectedOption(option)
    }





    function submitQuestion1(setId) {

        if (selectedOption !== null) {

            switch (setId) {


                //option (0) DAWN/DUSK
                case 0:


                    switch (selectedOption) {


                        //DAWN selected
                        case 0:


                            modifyPoints(27.31307938, 25.92258493, -28.87112887, -22.21557617)

                            break;

                        //DUSK Selected
                        case 1:

                            modifyPoints(-27.073980543, -25.53254608, 30.81085673, 23.30406316)

                            break;


                        default:
                            break;

                    }

                    break;

                // (1) forest/river
                case 1:

                    switch (selectedOption) {

                        //FOREST selected
                        case 0:



                            modifyPoints(28.816287974, 26.53804988, -29.61546288, -24.03943097)


                            break;

                        //RIVER Selected
                        case 1:

                            modifyPoints(-27.41760127, -25.25110895, 29.47879885, 25.29708668)


                            break;


                        default:
                            break;

                    }
                    break;


                // (2) Moon/stars
                case 2:

                    switch (selectedOption) {

                        //MOON selected
                        case 0:

                            modifyPoints(-26.99015136,	29.21779485,	-24.15712033	,24.38099947)

                            break;

                        //STARS Selected
                        case 1:
                            modifyPoints(28.653864,	-28.67894522,	26.97274135,	-24.67312267)

                            break;


                        default:
                            break;

                    }
                    break;


            }
            //go next question with random id
            if (questionsArray.length !== 0) {

                setQuestionPos(questionsArray[nextQuestionId])
            } else {
                setQuestionPos(8)
            }

        }

    }

    //show DUSK/DAWN 
    if (chosenSet === 0) {
        return (
            <div className='question'>

                <div className="question-container">
                    <h1>Dawn or Dusk?</h1>

                    <div className="options-container">

                        <button onClick={() => { selectOption(0) }}>Dawn</button>
                        <button onClick={() => { selectOption(1) }}>Dusk</button>

                    </div>
                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(0) }}>submit</button>
                </div>

            </div>
        )

        //show FOREST/RIVER
    } else if (chosenSet === 1) {

        return (
            <div className='question'>

                <div className="question-container">

                    <h1>Forest or River?</h1>

                    <div className="options-container">

                        <button onClick={() => { selectOption(0) }}>Forest</button>
                        <button onClick={() => { selectOption(1) }}>River</button>

                    </div>
                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(1) }}>submit</button>
                </div>
            </div>
        )



        //show MOON/STARS
    } else if (chosenSet === 2) {


        return (
            <div className='question'>

                <div className="question-container">

                    <h1>Moon or Stars?</h1>
                    <div className="options-container">
                        <button onClick={() => { selectOption(0) }}>Moon</button>
                        <button onClick={() => { selectOption(1) }}>Stars</button>

                    </div>
                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(2) }}>submit</button>
                </div>
            </div>
        )

    }
}
