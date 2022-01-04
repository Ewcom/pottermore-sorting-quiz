import React, { useContext, useState, useEffect } from 'react'
import { pointsContext } from '../../context/pointsContext'
import './question.scss'


export const Question5 = ({ setQuestionPos, questionsArray, setQuestionsArray }) => {

    //QUESTION #5

    //possible sets

    // (0) power
    // (1) looking forward to learning
    // (2) most like to study


    const [nextQuestionId, setNextQuestionId] = useState(null)


    useEffect(() => {

        //generate questions id when loading
        setChosenSet(Math.floor(Math.random() * 3))

        //generate next id of question
        setNextQuestionId(Math.floor(Math.random() * (questionsArray.length - 1)))
        //delete current id from array
        setQuestionsArray(oldArray => oldArray.filter((item) => { return item !== 5 }))


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
                //If you could have any power, which would you choose?
                case 0:


                    switch (selectedOption) {


                        //The power to read minds
                        case 0:


                            modifyPoints(-24.17506604, 28.02462586, -25.1266397, 22.78835747)

                            break;

                        //The power of invisibility	
                        case 1:



                            modifyPoints(30.94950708, -16.89419896, 2.016868281, -14.33237054)


                            break;


                        //The power of superhuman strength		
                        case 2:

                            modifyPoints(-21.74919519, -23.24640341, 35.67345622, 11.88982939)


                            break;

                        //The power to speak to animals	
                        case 3:

                            modifyPoints(-26.37624459, 19.87071358, 34.83739639, -26.54712946)


                            break;

                        //The power to change the past	
                        case 4:

                            modifyPoints(0.332990318, -17.10768552, -14.56762339, 33.38204993)


                            break;

                        //The power to change your appearance at will	
                        case 5:

                            modifyPoints(-2.458592609, 35.53189074, -13.20459011, -17.12880799)


                            break;




                        default:
                            break;

                    }

                    break;

                //set 1
                // What are you most looking forward to learning at Hogwarts?

                case 1:

                    switch (selectedOption) {

                        //Apparition and Disapparition (being able to materialize and dematerialize at will)	
                        case 0:



                            modifyPoints(31.23750325, -25.11011193, -28.8908555, 25.28530318)


                            break;
                        //Transfiguration (turning one object into another object)	
                        case 1:

                            modifyPoints(-14.19988561, 38.71431659, -9.304880652, -13.19296379)


                            break;
                        //Flying on a broomstick	
                        case 2:

                            modifyPoints(29.72186159, -27.4287872, 21.78213483, -20.92465167)


                            break;

                        //Hexes and jinxes	
                        case 3:

                            modifyPoints(-7.778462793, -13.81585107, -13.30728434, 35.89289216)

                            break;

                        //All about magical creatures, and how to befriend/care for them	
                        case 4:

                            modifyPoints(-12.54890353, -18.47726582, 48.09882314, -15.26330099)

                            break;

                        //Secrets about the castle	
                        case 5:

                            modifyPoints(42.92989547, -9.446864814, -19.33008843, -13.34053828)


                            break;

                        //Every area of magic I can	
                        case 6:

                            modifyPoints(-11.12421806, 39.19823338, -9.845999385, -16.51249774)


                            break;



                        default:
                            break;

                    }
                    break;


                //SET (2)  Which of the following would you most like to study?

                case 2:

                    switch (selectedOption) {

                        //Centaurs
                        case 0:

                            modifyPoints(27.3714009, 24.0994136, -27.38973573, -22.53814016)


                            break;

                        //Goblins	
                        case 1:

                            modifyPoints(-19.64625528, 31.81426945, -18.49200208, 8.73377004)


                            break;


                        //Merpeople	
                        case 2:

                            modifyPoints(-22.93634644, -24.86864463, 28.12543954, 21.80812282)

                            break;

                        //Ghosts	
                        case 3:

                            modifyPoints(27.95707126, 27.5289272, -30.00833793, -23.97913683)


                            break;

                        //Vampires
                        case 4:

                            modifyPoints(-11.72034886, -10.41163098, -11.93375648, 36.37906121)


                            break;

                        //Werewolves	
                        case 5:

                            modifyPoints(24.35997997, -25.33791883, 27.00762335, -24.61394017)


                            break;

                        //Trolls	
                        case 6:

                            modifyPoints(-28.33101425, -24.04994569, 34.15713638, 19.82128656)

                                
                            break;


                        default:
                            break;

                    }
                    break;



            }
            //submit
            if (questionsArray.length !== 0) {

                setQuestionPos(questionsArray[nextQuestionId])
            } else {
                setQuestionPos(8)
            }

        }

    }


    //show If you could have any power, which would you choose?
    if (chosenSet === 0) {
        return (
            <div className='question'>

                <div className="question-container">

                    <h1>If you could have any power, which would you choose?</h1>

                    <div className="options-container">

                        <button onClick={() => { selectOption(0) }}>The power of invisibility</button>
                        <button onClick={() => { selectOption(1) }}>The power of superhuman strength</button>
                        <button onClick={() => { selectOption(2) }}>The power to speak to animals</button>
                        <button onClick={() => { selectOption(3) }}>The power to change the past	</button>
                        <button onClick={() => { selectOption(4) }}>The power to change your appearance at will	</button>
                    </div>
                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(0) }}>submit</button>
                </div>
            </div>
        )

        //show What are you most looking forward to learning at Hogwarts?

    } else if (chosenSet === 1) {

        return (
            <div className='question'>

                <div className="question-container">

                    <h1>What are you most looking forward to learning at Hogwarts?</h1>


                    <div className="options-container">
                        <button onClick={() => { selectOption(0) }}>Apparition and Disapparition (being able to materialize and dematerialize at will)		</button>
                        <button onClick={() => { selectOption(1) }}>Transfiguration (turning one object into another object)	</button>
                        <button onClick={() => { selectOption(2) }}>Flying on a broomstick	</button>
                        <button onClick={() => { selectOption(3) }}>Hexes and jinxes</button>
                        <button onClick={() => { selectOption(4) }}>All about magical creatures, and how to befriend/care for them</button>
                        <button onClick={() => { selectOption(5) }}>Secrets about the castle</button>
                        <button onClick={() => { selectOption(6) }}>Every area of magic I can</button>
                    </div>
                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(1) }}>submit</button>
                </div>
            </div>
        )



        //Which of the following would you most like to study?

    } else if (chosenSet === 2) {


        return (
            <div className='question'>

                <div className="question-container">

                    <h1>Which of the following would you most like to study?</h1>

                    <div className="options-container">
                        <button onClick={() => { selectOption(0) }}>Centaurs</button>
                        <button onClick={() => { selectOption(1) }}>Goblins</button>
                        <button onClick={() => { selectOption(2) }}>Merpeople</button>
                        <button onClick={() => { selectOption(3) }}>Ghosts</button>
                        <button onClick={() => { selectOption(4) }}>Vampires</button>
                        <button onClick={() => { selectOption(5) }}>Werewolves</button>
                        <button onClick={() => { selectOption(6) }}>Trolls</button>
                    </div>
                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(2) }}>submit</button>
                </div>

            </div>
        )

    }
}
