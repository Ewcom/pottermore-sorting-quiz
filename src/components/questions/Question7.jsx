import React, { useContext, useState, useEffect } from 'react'
import { pointsContext } from '../../context/pointsContext'
import './question.scss'


export const Question7 = ({ setQuestionPos, questionsArray, setQuestionsArray }) => {

    //QUESTION #7 (pet)


    //possible sets

    // (0) If you were attending Hogwarts, which pet would you choose to take with you?

    const [nextQuestionId, setNextQuestionId] = useState(null)



    useEffect(() => {

        //generate questions id when render
        setChosenSet(Math.floor(Math.random() * 1))


        //generate next id of question
        setNextQuestionId(Math.floor(Math.random() * (questionsArray.length - 1)))
        //delete current id from array
        setQuestionsArray(oldArray => oldArray.filter((item) => { return item !== 7 }))



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


                //option (0) pet
                case 0:


                    switch (selectedOption) {


                        //Tabby cat
                        case 0:


                            modifyPoints(21.85474842, -15.70618627, -18.29258668, 13.43032963)


                            break;

                        //Siamese cat
                        case 1:



                            modifyPoints(1.195226867, -16.3304582, -16.65956807, 34.18266524)


                            break;

                        //Ginger cat
                        case 2:



                            modifyPoints(0.839050219, -14.37048947, -16.95729454, 33.06015636)


                            break;
                        //Black cat
                        case 3:



                            modifyPoints(-3.31335692, -15.09699497, -14.64059784, 34.29663831)


                            break;
                        //White cat
                        case 4:



                            modifyPoints(-2.010973881, -12.31639926, -14.30409975, 30.4632386)


                            break;
                        //Tawny owl
                        case 5:



                            modifyPoints(-0.6218274, 33.24307636, -15.52800838, -16.11836321)


                            break;
                        //Screech owl
                        case 6:



                            modifyPoints(4.48854486, 32.14465664, -17.05815483, -18.02695104)


                            break;
                        //Brown owl
                        case 7:



                            modifyPoints(0.915519162, 35.14392634, -16.87498976, -18.23297959)

                            break;
                        //Snowy owl
                        case 8:



                            modifyPoints(-12.04575153, 8.511453759, 13.7489804, -8.123961651)


                            break;
                        //Barn owl
                        case 9:


                            modifyPoints(-1.251899991, 34.06472026, -16.7952532, -15.0925878)


                            break;
                        //Common toad
                        case 10:



                            modifyPoints(-1.094048974, -21.72975856, 41.40180117, -16.72326959)

                            break;
                        //Natterjack toad
                        case 11:



                            modifyPoints(-3.687242276, -21.61573659, 42.45530748, -15.4372711)


                            break;
                        //Dragon toad
                        case 12:



                            modifyPoints(19.14913015, -8.1912111, 0.748385153, -10.04837708)

                            break;
                        //Harlequin toad
                        case 13:



                            modifyPoints(-5.394126249, -20.42261255, 42.91383116, -15.27359533)


                            break;
                        //Three toed tree toad
                        case 14:



                            modifyPoints(-10.19693536, 7.340865871, 12.782762, -6.99714692)


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

    //show DUSK/DAWN 
    if (chosenSet === 0) {
        return (
            <div className='question'>

                <div className="question-container">

                    <h1>If you were attending Hogwarts, which pet would you choose to take with you?</h1>
                    <div className="options-container options-small">
                        <button onClick={() => { selectOption(0) }}>Tabby cat</button>
                        <button onClick={() => { selectOption(1) }}>Siamese cat</button>
                        <button onClick={() => { selectOption(2) }}>Ginger cat</button>
                        <button onClick={() => { selectOption(3) }}>Black cat</button>
                        <button onClick={() => { selectOption(4) }}>White cat</button>
                        <button onClick={() => { selectOption(5) }}>Tawny owl</button>
                        <button onClick={() => { selectOption(6) }}>Screech owl</button>
                        <button onClick={() => { selectOption(7) }}>Brown owl</button>
                        <button onClick={() => { selectOption(8) }}>Snowy owl</button>
                        <button onClick={() => { selectOption(9) }}>Barn owl</button>
                        <button onClick={() => { selectOption(10) }}>Common toad</button>
                        <button onClick={() => { selectOption(11) }}>Natterjack toad</button>
                        <button onClick={() => { selectOption(12) }}>Dragon toad</button>
                        <button onClick={() => { selectOption(13) }}>Harlequin toad</button>
                        <button onClick={() => { selectOption(14) }}>Three toed tree toad</button>
                    </div>
                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(0) }}>submit</button>
                </div>
            </div>
        )

        //show FOREST/RIVER
    }

}
