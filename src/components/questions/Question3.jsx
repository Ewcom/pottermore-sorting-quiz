import React, { useContext, useState, useEffect } from 'react'
import { pointsContext } from '../../context/pointsContext'
import './question.scss'


export const Question3 = ({ setQuestionPos, questionsArray, setQuestionsArray }) => {

    const [nextQuestionId, setNextQuestionId] = useState(null)


    //QUESTION #3


    //possible sets

    // (0) goblets
    // (1) instrument
    // (2) magical garden
    // (3) boxes 
    // (4) flutterby bush 

    useEffect(() => {

        //generate questions id when loading
        setChosenSet(Math.floor(Math.random() * 5))

        //generate next id of question
        setNextQuestionId(Math.floor(Math.random() * (questionsArray.length - 1)))
        //delete current id from array
        setQuestionsArray(oldArray => oldArray.filter((item) => { return item !== 3 }))


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


                //set 0
                //Four goblets are placed before you. Which would you choose to drink?
                case 0:


                    switch (selectedOption) {


                        //The foaming, frothing, silvery liquid that sparkles as though containing ground diamonds.

                        case 0:


                            modifyPoints(-13.99879538, 40.11098139, -9.406077434, -15.58163736)

                            break;

                        //The smooth, thick, richly purple drink that gives off a delicious smell of chocolate and plums.
                        case 1:



                            modifyPoints(-16.25660413, -14.34614176, 46.3278991, -14.08038371)


                            break;


                        //The golden liquid so bright that it hurts the eye, and which makes sunspots dance all around the room.
                        case 2:

                            modifyPoints(40.92686336, -11.34270662, -17.29827761, -10.81718067)


                            break;

                        //The mysterious black liquid that gleams like ink, and gives off fumes that make you see strange visions.
                        case 3:

                            modifyPoints(-10.00982635, -11.93103289, -11.01834159, 34.71808527)


                            break;




                        default:
                            break;

                    }

                    break;

                //set 1
                // (1) What kind of instrument most pleases your ear?
                case 1:

                    switch (selectedOption) {

                        //The violin	
                        case 0:



                            modifyPoints(-10.33126266, -10.98565505, -12.52911445, 35.07799069)


                            break;

                        //The trumpet
                        case 1:

                            modifyPoints(-14.00827913, -14.41607143, 43.22386173, -12.52828715)


                            break;

                        //The piano
                        case 2:

                            modifyPoints(-12.98508415, 40.30457373, -12.26180667, -12.91961924)


                            break;


                        //The drum	
                        case 3:

                            modifyPoints(44.15185475, -14.48981764, -19.39087512, -7.911670833)


                            break;



                        default:
                            break;

                    }
                    break;


                //SET (2)  You enter an enchanted garden. What would you be most curious to examine first?
                case 2:

                    switch (selectedOption) {

                        //The silver leafed tree bearing golden apples	
                        case 0:
                            modifyPoints(-11.70832774, 38.10156627, -10.47728774, -14.4066053)


                            break;

                        //The fat red toadstools that appear to be talking to each other
                        case 1:

                            modifyPoints(-11.38975609, -19.363342, 45.66505899, -12.41636611)

                            break;


                        //The bubbling pool, in the depths of which something luminous is swirling
                        case 2:

                            modifyPoints(-18.79689945, -8.167283167, -10.95346404, 39.02161532)


                            break;

                        //The statue of an old wizard with a strangely twinkling eye
                        case 3:

                            modifyPoints(41.23017056, -14.2140387, -17.91308959, -6.702406531)


                            break;


                        default:
                            break;

                    }
                    break;

                //SET (3) Four boxes are placed before you. Which would you try and open?
                case 3:

                    switch (selectedOption) {

                        //The small tortoiseshell box, embellished with gold, inside which some small creature seems to be squeaking.	
                        case 0:

                            modifyPoints(-22.52161163, -11.39500098, 46.9276079, -10.3717712)


                            break;

                        //The gleaming jet black box with a silver lock and key, marked with a mysterious rune that you know to be the mark of Merlin.
                        case 1:

                            modifyPoints(-10.90548604, -9.593133701, -16.14193004, 38.09339906)


                            break;

                        //The ornate golden casket, standing on clawed feet, whose inscription warns that both secret knowledge and unbearable temptation lie within.
                        case 2:

                            modifyPoints(-12.21860138, 37.71117418, -10.66015592, -13.04771215)


                            break;

                        //The small pewter box, unassuming and plain, with a scratched message upon it that reads ‘I open only for the worthy.’
                        case 3:

                            modifyPoints(42.85559784, -13.92739453, -18.49815241, -7.988791579)


                            break;


                        default:
                            break;

                    }
                    break;

                //set(4) Once every century, the Flutterby bush produces flowers that adapt their scent to attract the unwary. 

                case 4:

                    switch (selectedOption) {

                        //A crackling log fire	
                        case 0:

                            modifyPoints(42.20240168, -8.357753463, -22.78056435, -8.243194893)


                            break;

                        //The sea
                        case 1:

                            modifyPoints(-8.586342901, -7.507111586, -16.19218269, 35.04330848)

                            break;

                        //Fresh parchment
                        case 2:

                            modifyPoints(-12.55006436, 38.93217968, -11.48254915, -14.14056557)


                            break;

                        //Home
                        case 3:

                            modifyPoints(-14.20337805, -16.50952349, 45.40854108, -13.23654274)


                            break;


                        default:
                            break;

                    }
                    break;


            }
            //next questions returns random id as parameter for next questions and deletes current question from left questions array
            if (questionsArray.length !== 0) {

                setQuestionPos(questionsArray[nextQuestionId])
            } else {
                setQuestionPos(8)
            }

        }

    }

    //show HATE PEOPLE TO CALL YOU
    if (chosenSet === 0) {
        return (
            <div className='question'>

                <div className="question-container">

                    <h1>Four goblets are placed before you. Which would you choose to drink?</h1>

                    <div className="options-container">

                        <button onClick={() => { selectOption(0) }}>The foaming, frothing, silvery liquid that sparkles as though containing ground diamonds.</button>
                        <button onClick={() => { selectOption(1) }}>The smooth, thick, richly purple drink that gives off a delicious smell of chocolate and plums.</button>
                        <button onClick={() => { selectOption(2) }}>The golden liquid so bright that it hurts the eye, and which makes sunspots dance all around the room.</button>
                        <button onClick={() => { selectOption(3) }}>The mysterious black liquid that gleams like ink, and gives off fumes that make you see strange visions.</button>
                    </div>

                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(0) }}>submit</button>
                </div>
            </div>
        )

        //show AFTER YOU DIED
    } else if (chosenSet === 1) {

        return (
            <div className='question'>

                <div className="question-container">


                    <h1>What kind of instrument most pleases your ear?</h1>

                    <div className="options-container">

                        <button onClick={() => { selectOption(0) }}>The violin	</button>
                        <button onClick={() => { selectOption(1) }}>The trumpet</button>
                        <button onClick={() => { selectOption(2) }}>The piano</button>
                        <button onClick={() => { selectOption(3) }}>The drum</button>
                    </div>
                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(1) }}>submit</button>

                </div>
            </div>
        )



        //KNOWN TO HISTORY
    } else if (chosenSet === 2) {


        return (
            <div className='question'>

                <div className="question-container">



                    <h1>You enter an enchanted garden. What would you be most curious to examine first?</h1>
                    <div className="options-container">

                        <button onClick={() => { selectOption(0) }}>The silver leafed tree bearing golden apples</button>
                        <button onClick={() => { selectOption(1) }}>The fat red toadstools that appear to be talking to each othe</button>
                        <button onClick={() => { selectOption(2) }}>The bubbling pool, in the depths of which something luminous is swirling</button>
                        <button onClick={() => { selectOption(3) }}>The statue of an old wizard with a strangely twinkling eye</button>
                    </div>
                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(2) }}>submit</button>

                </div>
            </div>
        )

    } else if (chosenSet === 3) {


        return (
            <div className='question'>

                <div className="question-container">



                    <h1>Four boxes are placed before you. Which would you try and open?</h1>
                    <div className="options-container">

                        <button onClick={() => { selectOption(0) }}>The small tortoiseshell box, embellished with gold, inside which some small creature seems to be squeaking.</button>
                        <button onClick={() => { selectOption(1) }}>The gleaming jet black box with a silver lock and key, marked with a mysterious rune that you know to be the mark of Merlin.	</button>
                        <button onClick={() => { selectOption(2) }}>The ornate golden casket, standing on clawed feet, whose inscription warns that both secret knowledge and unbearable temptation lie within.	</button>
                        <button onClick={() => { selectOption(3) }}>The small pewter box, unassuming and plain, with a scratched message upon it that reads ‘I open only for the worthy.’	?</button>
                    </div>
                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(3) }}>submit</button>

                </div>
            </div>
        )



    } else if (chosenSet === 4) {



        return (
            <div className='question'>

                <div className="question-container">



                    <h1>Once every century, the Flutterby bush produces flowers that adapt their scent to attract the unwary. If it lured you, it would smell of:</h1>

                    <div className="options-container">
                        <button onClick={() => { selectOption(0) }}>A crackling log fire	</button>
                        <button onClick={() => { selectOption(1) }}>The sea	</button>
                        <button onClick={() => { selectOption(2) }}>Fresh parchment</button>
                        <button onClick={() => { selectOption(3) }}>Home</button>
                    </div>
                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(4) }}>submit</button>

                </div>
            </div>
        )


    }
}
