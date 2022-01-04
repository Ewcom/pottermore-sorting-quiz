import React, { useContext, useState, useEffect } from 'react'
import { pointsContext } from '../../context/pointsContext'
import './question.scss'


export const Question2 = ({ setQuestionPos, questionsArray, setQuestionsArray }) => {

    const [nextQuestionId, setNextQuestionId] = useState(null)


    //QUESTION #2

    useEffect(() => {

        //generate questions id when loading
        setChosenSet(Math.floor(Math.random() * 4))

        //generate next id of question
        setNextQuestionId(Math.floor(Math.random() * (questionsArray.length - 1)))
        //delete current id from array
        setQuestionsArray(oldArray => oldArray.filter((item) => { return item !== 2 }))


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


    //possible questions

    // (0) hate to be called
    // (1) after yo've died
    // (2) known to history
    // (3) potion 


    function submitQuestion1(setId) {

        if (selectedOption !== null) {


            switch (setId) {


                //set 0
                //option (0) Which of the following would you most hate people to call you?
                case 0:


                    switch (selectedOption) {


                        //Ordinary selected
                        case 0:


                            //11.75519742	-10.92370078	-10.86606985	35.83478687
                            modifyPoints(11.75519742, -10.92370078, -10.86606985, 35.83478687)

                            break;

                        //Ignorant Selected
                        case 1:


                            // -12.60998441	40.265642	-10.2989145	-14.55694498

                            modifyPoints(-12.60998441, 40.265642, -10.2989145, -14.55694498)
                            break;


                        //Cowardly
                        //42.87682039	-15.5525649	-16.60672085	-9.827956095
                        case 2:

                            modifyPoints(42.87682039, -15.5525649, -16.60672085, -9.827956095)


                            break;

                        //Selfish
                        //-15.48432768	-18.0245794	45.89311983	-10.87602756
                        case 3:

                            modifyPoints(-15.48432768, -18.0245794, 45.89311983, -10.87602756)
                            break;


                        default:
                            break;

                    }

                    break;

                //set 1
                // (1) After you have died, what would you most like people to do when they hear your name?
                case 1:

                    switch (selectedOption) {

                        //Miss you, but smile
                        //-13.7807683	-13.91040329	46.49760029	-16.18133969
                        case 0:



                            modifyPoints(-13.7807683, -13.91040329, 46.49760029, -16.18133969)


                            break;

                        //Ask for more stories about your adventures
                        //41.37660787	-11.1817536	-21.22463154	-7.60796961
                        case 1:

                            modifyPoints( 41.37660787, -11.1817536, -21.22463154, -7.60796961)

                            break;

                        //Think with admiration of your achievements
                        //-10.57625107	40.25907324	-11.94444904	-15.29969347
                        case 2:

                            modifyPoints(-10.57625107,	40.25907324	,-11.94444904	,-15.29969347)


                            break;


                        //I don't care what people think of me after I'm dead; it's what they think of me while I'm alive that counts
                        //-12.2082282	-9.366492361	-12.77709973	36.48253984
                        case 3:

                            modifyPoints(-12.2082282,	-9.366492361,	-12.77709973,	36.48253984)


                            break;



                        default:
                            break;

                    }
                    break;


                //SET How would you like to be known to history?
                case 2:

                    switch (selectedOption) {

                        //The Wise
                        //-12.39357202	40.07671351	-12.50534524	-13.46060562
                        case 0:

                            modifyPoints(-12.39357202,	40.07671351	,-12.50534524,	-13.46060562)


                            break;

                        //The good
                        //-14.87071125	-16.00228703	43.98568091	-11.52986338
                        case 1:

                            modifyPoints(-14.87071125,	-16.00228703,	43.98568091	,-11.52986338)


                            break;


                        //the great
                        //-11.48453278	-10.16648232	-15.37467794	38.23373882
                        case 2:

                            modifyPoints(-11.48453278,	-10.16648232,	-15.37467794	,38.23373882)


                            break;

                        //the bold
                        //41.31616697	-14.48335335	-19.24767597	-5.019035161
                        case 3:

                            modifyPoints(41.31616697,	-14.48335335,-19.24767597	,-5.019035161)


                            break;


                        default:
                            break;

                    }
                    break;

                //SET Given the choice, would you rather invent a potion that would guarantee you:
                case 3:

                    switch (selectedOption) {

                        //Love?
                        //-15.09086809	-13.3779201	43.10458952	-13.19529925
                        case 0:

                            modifyPoints(-15.09086809,-13.3779201	,43.10458952,	-13.19529925)


                            break;

                        //glory?
                        //43.15790393	-12.41975537	-18.22940109	-10.43593648
                        case 1:

                            modifyPoints(43.15790393,	-12.41975537,	-18.22940109,	-10.43593648)


                            break;

                        //wisdom?
                        //-15.52102159	42.01691959	-8.467320109	-15.59260888
                        case 2:

                            modifyPoints(-15.52102159,	42.01691959	,-8.467320109	,-15.59260888)


                            break;

                        //power?
                        //-12.48667468	-10.53541555	-11.03327086	36.26321903
                        case 3:

                            modifyPoints(-12.48667468,	-10.53541555	,-11.03327086	,36.26321903)


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


                    <h1>Which of the following would you most hate people to call you?</h1>

                    <div className="options-container">
                        <button onClick={() => { selectOption(0) }}>Ordinary</button>
                        <button onClick={() => { selectOption(1) }}>Ignorant</button>
                        <button onClick={() => { selectOption(2) }}>Cowardly</button>
                        <button onClick={() => { selectOption(3) }}>Selfish</button>
                    </div>
                    <button className='submit-button' onClick={() => { submitQuestion1(0) }}>submit</button>

                </div>
            </div>
        )

        //show AFTER YOU DIED
    } else if (chosenSet === 1) {

        return (
            <div className='question'>

                <div className="question-container">






                    <h1>After you have died, what would you most like people to do when they hear your name?</h1>
                    <div className="options-container">

                        <button onClick={() => { selectOption(0) }}>Miss you, but smile</button>
                        <button onClick={() => { selectOption(1) }}>Ask for more stories about your adventures</button>
                        <button onClick={() => { selectOption(2) }}>Think with admiration of your achievements</button>
                        <button onClick={() => { selectOption(3) }}>I don't care what people think of me after I'm dead; it's what they think of me while I'm alive that counts</button>

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





                    <h1>How would you like to be known to history?</h1>

                    <div className="options-container">
                        <button onClick={() => { selectOption(0) }}>The Wise</button>
                        <button onClick={() => { selectOption(1) }}>The Good</button>
                        <button onClick={() => { selectOption(2) }}>The Great</button>
                        <button onClick={() => { selectOption(3) }}>The Bold</button>
                    </div>

                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(2) }}>submit</button>

                </div>
            </div>
        )

    } else if (chosenSet === 3) {


        return (
            <div className='question'>

                <div className="question-container">



                    <h1>Given the choice, would you rather invent a potion that would guarantee you:</h1>


                    <div className="options-container">

                        <button onClick={() => { selectOption(0) }}>Love?</button>
                        <button onClick={() => { selectOption(1) }}>Glory?</button>
                        <button onClick={() => { selectOption(2) }}>Wisdom?</button>
                        <button onClick={() => { selectOption(3) }}>Power?</button>

                    </div>
                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(3) }}>submit</button>

                </div>
            </div>
        )



    }
}
