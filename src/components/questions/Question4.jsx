import React, { useContext, useState, useEffect } from 'react'
import { pointsContext } from '../../context/pointsContext'
import './question.scss'


export const Question4 = ({ setQuestionPos, questionsArray, setQuestionsArray }) => {

    //QUESTION #4


    //possible sets

    // (0) difficult to deal
    // (1) troll
    // (2) which would you rather be

    const [nextQuestionId, setNextQuestionId] = useState(null)

    useEffect(() => {

        //generate questions id when loading
        setChosenSet(Math.floor(Math.random() * 3))

        //generate next id of question
        setNextQuestionId(Math.floor(Math.random() * (questionsArray.length - 1)))
        //delete current id from array
        setQuestionsArray(oldArray => oldArray.filter((item) => { return item !== 4 }))


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
                //Which of the following do you find most difficult to deal with?
                case 0:


                    switch (selectedOption) {


                        //Hunger
                        case 0:

                            modifyPoints(-28.21972672, 26.96307844, 31.95072949, -29.10382335)


                            break;

                        //Cold
                        case 1:



                            modifyPoints(-24.05310951, -23.48514187, 27.93543613, 21.04293859)


                            break;


                        //Loneliness	
                        case 2:

                            modifyPoints(29.03349777, -28.05313842, 24.90792029, -23.82686029)


                            break;

                        //Boredom
                        case 3:

                            modifyPoints(29.94248441, -19.42137955, -35.99363729, 26.75190709)


                            break;

                        //being ignored
                        case 4:

                            modifyPoints(-26.09709417, 31.63714224, -24.79204017, 21.68704531)


                            break;




                        default:
                            break;

                    }

                    break;

                //set 1
                // A troll has gone berserk in the Headmaster’s study at Hogwarts. It is about to smash, crush and tear several
                //irreplaceable items and treasures. In which order would you rescue these objects from the troll’s club, if you could?
                case 1:

                    switch (selectedOption) {

                        //First, a nearly perfected cure for dragon pox. Then student records going back 1000 years. Finally, a mysterious handwritten book full of strange runes.
                        case 0:



                            modifyPoints(29.36249156, -26.05442147, 22.00609388, -23.63817211)

                            break;

                        //First, student records going back 1000 years. Then a mysterious handwritten book full of strange runes. Finally, a nearly perfected cure for dragon pox.	
                        case 1:

                            modifyPoints(-9.379429293, -7.076799721, -13.36717194, 31.65289076)

                            break;

                        //First, a mysterious handwritten book full of strange runes. Then a nearly perfected cure for dragon pox. Finally, student records going back 1000 years.	
                        case 2:

                            modifyPoints(-9.700034249, 42.34681029, -10.37103553, -20.32349944)

                            break;


                        //First, a nearly perfected cure for dragon pox. Then a mysterious handwritten book full of strange runes. Finally, student records going back 1000 years.	
                        case 3:

                            modifyPoints(43.98182657, -7.569136306, -22.75962425, -11.54315695)

                            break;


                        //First student records going back 1000 years. Then, a nearly perfected cure for dragon pox. Finally, a mysterious handwritten book full of strange runes.	
                        case 4:

                            modifyPoints(-6.966899719, -17.49563511, 41.93544305, -15.12882189)


                            break;

                        //First, a mysterious handwritten book full of strange runes. Then student records going back 1000 years. Finally, a nearly perfected cure for dragon pox.	
                        case 5:

                            modifyPoints(-24.05779612, 29.0768229, -23.46927222, 20.08155918)


                            break;



                        default:
                            break;

                    }
                    break;


                //SET (2)  Which would you rather be
                case 2:

                    switch (selectedOption) {

                        //Envied?
                        case 0:

                            modifyPoints(-23.38608287, 29.56240784, -24.43494458, 20.27897556)


                            break;

                        //Imitated?	
                        case 1:

                            modifyPoints(-10.02110229, 41.34717373, -13.15711695, -15.54384446)


                            break;


                        //Trusted?	
                        case 2:

                            modifyPoints(27.74841466, -26.66929985, 25.37043067, -24.89501457)


                            break;

                        //Praised?
                        case 3:

                            modifyPoints(34.35667446, -14.96501695, -28.68955105, 10.71436737)


                            break;

                        //Liked?
                        case 4:

                            modifyPoints(-10.98726978, -16.01999991, 43.07559247, -13.92482477)

                            break;

                        //feared
                        case 5:

                            modifyPoints(-11.84099775, -9.375944575, -10.65163345, 33.45753935)


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

    //show Which of the following do you find most difficult to deal with?
    if (chosenSet === 0) {
        return (
            <div className='question'>

                <div className="question-container">

                    <h1>show Which of the following do you find most difficult to deal with?</h1>

                    <div className="options-container">
                        <button onClick={() => { selectOption(0) }}>Hunger</button>
                        <button onClick={() => { selectOption(1) }}>Cold</button>
                        <button onClick={() => { selectOption(2) }}>Loneliness</button>
                        <button onClick={() => { selectOption(3) }}>Boredom	</button>
                        <button onClick={() => { selectOption(4) }}>Being ignored</button>
                    </div>
                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(0) }}>submit</button>

                </div>
            </div>
        )

        //show A troll has gone berserk in the Headmaster’s study at Hogwarts.     
    } else if (chosenSet === 1) {

        return (
            <div className='question'>

                <div className="question-container">

                    <h1 className='title-small'>A troll has gone berserk in the Headmaster’s study at Hogwarts. It is about to smash, crush and tear several irreplaceable items and treasures. In which order would you rescue these objects from the troll’s club, if you could?</h1>
                    <div className="options-container">

                        <button onClick={() => { selectOption(0) }}>First, a nearly perfected cure for dragon pox. Then student records going back 1000 years. Finally, a mysterious handwritten book full of strange runes.		</button>
                        <button onClick={() => { selectOption(1) }}>First, student records going back 1000 years. Then a mysterious handwritten book full of strange runes. Finally, a nearly perfected cure for dragon pox.</button>
                        <button onClick={() => { selectOption(2) }}>First, a mysterious handwritten book full of strange runes. Then a nearly perfected cure for dragon pox. Finally, student records going back 1000 years.</button>
                        <button onClick={() => { selectOption(3) }}>First, a nearly perfected cure for dragon pox. Then a mysterious handwritten book full of strange runes. Finally, student records going back 1000 years.</button>
                        <button onClick={() => { selectOption(4) }}>First student records going back 1000 years. Then, a nearly perfected cure for dragon pox. Finally, a mysterious handwritten book full of strange runes</button>
                        <button onClick={() => { selectOption(5) }}>First, a mysterious handwritten book full of strange runes. Then student records going back 1000 years. Finally, a nearly perfected cure for dragon pox.	</button>

                    </div>
                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(1) }}>submit</button>

                </div>
            </div>
        )



        //Which would you rather be:
    } else if (chosenSet === 2) {


        return (
            <div className='question'>

                <div className="question-container">

                    <h1>Which would you rather be:</h1>

                    <div className="options-container">

                        <button onClick={() => { selectOption(0) }}>Envied?	</button>
                        <button onClick={() => { selectOption(1) }}>Imitated?</button>
                        <button onClick={() => { selectOption(2) }}>Trusted?</button>
                        <button onClick={() => { selectOption(3) }}>Praised?</button>
                        <button onClick={() => { selectOption(3) }}>Liked?</button>
                        <button onClick={() => { selectOption(3) }}>Feared?</button>

                    </div>
                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(2) }}>submit</button>

                </div>
            </div>
        )

    }
}
