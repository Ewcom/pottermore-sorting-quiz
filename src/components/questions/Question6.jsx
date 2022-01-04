import React, { useContext, useState, useEffect } from 'react'
import { pointsContext } from '../../context/pointsContext'
import './question.scss'


export const Question6 = ({ setQuestionPos, questionsArray, setQuestionsArray }) => {

    //QUESTION #6


    //possible sets

    // (0) bridge troll
    // (1) cheating
    // (2) muggle
    // (3) nightmare
    // (4) road
    // (5) street


    const [nextQuestionId, setNextQuestionId] = useState(null)


    useEffect(() => {

        //generate questions id when loading
        setChosenSet(Math.floor(Math.random() * 6))


        //generate next id of question
        setNextQuestionId(Math.floor(Math.random() * (questionsArray.length - 1)))
        //delete current id from array
        setQuestionsArray(oldArray => oldArray.filter((item) => { return item !== 6 }))


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
                //You and two friends need to cross a bridge guarded by a river troll who insists on fighting one 
                //of you before he will let all of you pass. Do you:

                case 0:


                    switch (selectedOption) {


                        //Attempt to confuse the troll into letting all three of you pass without fighting?	
                        case 0:


                            modifyPoints(-12.21949559, 39.18673579, -14.32592834, -10.15802264)


                            break;

                        //Suggest drawing lots to decide which of you will fight?	
                        case 1:



                            modifyPoints(-16.77231763, -9.948193394, 45.02575153, -15.61728574)


                            break;


                        //Suggest that all three of you should fight (without telling the troll)?	
                        case 2:

                            modifyPoints(-7.926035393, -10.24499201, -15.64058444, 37.26154927)


                            break;

                        //Volunteer to fight?	
                        case 3:

                            modifyPoints(40.38906615, -7.371976409, -20.39648571, -11.08309843)


                            break;




                        default:
                            break;

                    }

                    break;

                //set 1
                //One of your house mates has cheated in a Hogwarts exam by using a...
                case 1:

                    switch (selectedOption) {


                        //Lie and say you don’t know (but hope that somebody else tells Professor Flitwick the truth).	
                        case 0:



                            modifyPoints(-13.48432155, -17.29439279, 41.3626604, -8.254486504)


                            break;

                        //Tell Professor Flitwick that he ought to ask your classmate (and resolve to tell your classmate that if he doesn’t tell the truth, you will).	
                        case 1:

                            modifyPoints(42.1033363, -13.65683918, -13.49218299, -12.21474272)

                            break;

                        //Tell Professor Flitwick the truth. If your classmate is prepared to win by cheating, he deserves to be found out. Also, as you are both in the same house, any points he loses will be regained by you, for coming first in his place.	
                        case 2:

                            modifyPoints(-10.92391358, 38.69530242, -13.4125977, -12.69153243)


                            break;


                        //You would not wait to be asked to tell Professor Flitwick the truth. If you knew that somebody was using a forbidden quill, you would tell the teacher before the exam started.	
                        case 3:

                            modifyPoints(-13.12925161, -8.009293327, -13.65120757, 36.94995767)


                            break;



                        default:
                            break;

                    }
                    break;


                //SET (2)  A Muggle confronts you and says that they are sure you are a witch or wizard. Do you:
                case 2:

                    switch (selectedOption) {

                        //Ask what makes them think so?	
                        case 0:

                            modifyPoints(-18.51698777, 43.19651328, -5.627175508, -16.24151016)

                            break;

                        //Agree, and ask whether they’d like a free sample of a jinx?	
                        case 1:

                            modifyPoints(-5.297205391, -17.31138241, -10.74329071, 35.9759978)


                            break;


                        //Agree, and walk away, leaving them to wonder whether you are bluffing?		
                        case 2:

                            modifyPoints(40.41114795, -8.735245784, -18.1847105, -11.05628226)


                            break;

                        //Tell them that you are worried about their mental health, and offer to call a doctor.	
                        case 3:

                            modifyPoints(-19.40603566, -12.71912669, 45.08269049, -11.02696975)


                            break;


                        default:
                            break;

                    }
                    break;

                default:
                    break;

                //Which nightmare would frighten you most?

                case 3:

                    switch (selectedOption) {

                        //Standing on top of something very high and realizing suddenly that there are no hand- or footholds, nor any barrier to stop you falling.	
                        case 0:

                            modifyPoints(-16.19003593, 38.81152886, -12.6984308, -8.023692844)

                            break;

                        //An eye at the keyhole of the dark, windowless room in which you are locked.	
                        case 1:

                            modifyPoints(41.33854576, -10.03525098, -15.91229289, -13.32183833)


                            break;


                        //Waking up to find that neither your friends nor your family have any idea who you are.		
                        case 2:

                            modifyPoints(-12.96227842, -16.55271609, 45.43418375, -13.83281749)


                            break;

                        //Being forced to speak in such a silly voice that hardly anyone can understand you, and everyone laughs at you.	
                        case 3:

                            modifyPoints(-15.94847125, -5.745641099, -14.83832559, 38.61738702)


                            break;


                        default:
                            break;

                    }
                    break;




                //Which road tempts you most?

                case 4:

                    switch (selectedOption) {

                        //The wide, sunny, grassy lane		
                        case 0:

                            modifyPoints(-11.22676033, -19.11937453, 44.82488386, -11.93639792)

                            break;

                        //The narrow, dark, lantern-lit alley		
                        case 1:

                            modifyPoints(-8.811621902, -12.02741304, -14.9112595, 37.69703494)


                            break;


                        //The twisting, leaf-strewn path through woods			
                        case 2:

                            modifyPoints(42.24315194, -12.70821137, -18.82743135, -9.136595044)


                            break;

                        //The cobbled street lined with ancient buildings	
                        case 3:

                            modifyPoints(-12.43166553, 35.99676211, -8.879904942, -12.94114978)


                            break;


                        default:
                            break;

                    }
                    break;



                //Late at night, walking alone down the street, you hear a peculiar cry that you believe to have a magical source. Do you:

                case 5:

                    switch (selectedOption) {

                        //Proceed with caution, keeping one hand on your concealed wand and an eye out for any disturbance?	
                        case 0:

                            modifyPoints(-14.65804948, -15.8493254, 44.16189924, -11.70782536)

                            break;

                        //Draw your wand and try to discover the source of the noise?	
                        case 1:

                            modifyPoints(39.6505303, -10.56490073, -17.17403609, -10.73515537)


                            break;


                        //Draw your wand and stand your ground?		
                        case 2:

                            modifyPoints(-10.77612981, -13.71260225, -11.14976792, 37.69080105)


                            break;

                        //Withdraw into the shadows to await developments, while mentally reviewing the most appropriate defensive and offensive spells, should trouble occur?	
                        case 3:

                            modifyPoints(-11.6321132, 37.79842292, -12.45575343, -12.64871392)


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


    //bridge troll
    if (chosenSet === 0) {
        return (
            <div className='question'>

                <div className="question-container">

                    <h1>You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass. Do you:</h1>
                    <div className="options-container">
                        <button onClick={() => { selectOption(0) }}>Attempt to confuse the troll into letting all three of you pass without fighting?</button>
                        <button onClick={() => { selectOption(1) }}>Suggest drawing lots to decide which of you will fight?	</button>
                        <button onClick={() => { selectOption(2) }}>Suggest that all three of you should fight (without telling the troll)?	</button>
                        <button onClick={() => { selectOption(3) }}>Volunteer to fight?	</button>
                    </div>

                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(0) }}>submit</button>

                </div>
            </div>
        )

        //cheating examen
    } else if (chosenSet === 1) {

        return (
            <div className='question'>

                <div className="question-container">

                    <h1 className='title-small'>One of your house mates has cheated in a Hogwarts exam by using a Self-Spelling Quill. Now he has come top of the class in Charms, beating you into second place. Professor Flitwick is suspicious of what happened. He draws you to one side after his lesson and asks you whether or not your classmate used a forbidden quill. What do you do?</h1>
                    <div className="options-container options-small" >
                        <button onClick={() => { selectOption(0) }}>Lie and say you don’t know (but hope that somebody else tells Professor Flitwick the truth).	</button>
                        <button onClick={() => { selectOption(1) }}>Tell Professor Flitwick that he ought to ask your classmate (and resolve to tell your classmate that if he doesn’t tell the truth, you will).	</button>
                        <button onClick={() => { selectOption(2) }}>Tell Professor Flitwick the truth. If your classmate is prepared to win by cheating, he deserves to be found out. Also, as you are both in the same house, any points he loses will be regained by you, for coming first in his place.	</button>
                        <button onClick={() => { selectOption(3) }}>You would not wait to be asked to tell Professor Flitwick the truth. If you knew that somebody was using a forbidden quill, you would tell the teacher before the exam started.	</button>
                    </div>

                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(1) }}>submit</button>

                </div>
            </div>
        )



        //muggle

    } else if (chosenSet === 2) {


        return (
            <div className='question'>

                <div className="question-container">

                    <h1>A Muggle confronts you and says that they are sure you are a witch or wizard. Do you:</h1>
                    <div className="options-container">
                        <button onClick={() => { selectOption(0) }}>Ask what makes them think so?	</button>
                        <button onClick={() => { selectOption(1) }}>Agree, and ask whether they’d like a free sample of a jinx?	</button>
                        <button onClick={() => { selectOption(2) }}>Agree, and walk away, leaving them to wonder whether you are bluffing?	</button>
                        <button onClick={() => { selectOption(3) }}>Tell them that you are worried about their mental health, and offer to call a doctor.	</button>

                    </div>
                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(2) }}>submit</button>

                </div>
            </div>
        )

        //nightmare 
    } else if (chosenSet === 3) {


        return (
            <div className='question'>

                <div className="question-container">

                    <h1>Which nightmare would frighten you most?</h1>
                    <div className="options-container">
                        <button onClick={() => { selectOption(0) }}>Standing on top of something very high and realizing suddenly that there are no hand- or footholds, nor any barrier to stop you falling.	</button>
                        <button onClick={() => { selectOption(1) }}>An eye at the keyhole of the dark, windowless room in which you are locked.	</button>
                        <button onClick={() => { selectOption(2) }}>Waking up to find that neither your friends nor your family have any idea who you are.	</button>
                        <button onClick={() => { selectOption(3) }}>Being forced to speak in such a silly voice that hardly anyone can understand you, and everyone laughs at you.	</button>

                    </div>
                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(3) }}>submit</button>

                </div>
            </div>
        )


        //road
    } else if (chosenSet === 4) {

        return (
            <div className='question'>

                <div className="question-container">

                    <h1>Which road tempts you most?</h1>

                    <div className="options-container">
                        <button onClick={() => { selectOption(0) }}>The wide, sunny, grassy lane</button>
                        <button onClick={() => { selectOption(1) }}>The narrow, dark, lantern-lit alley</button>
                        <button onClick={() => { selectOption(2) }}>The twisting, leaf-strewn path through woods</button>
                        <button onClick={() => { selectOption(3) }}>The cobbled street lined with ancient buildings	</button>

                    </div>
                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(4) }}>submit</button>

                </div>
            </div>
        )

        //street
    } else if (chosenSet === 5) {

        return (
            <div className='question'>

                <div className="question-container">


                    <h1>Late at night, walking alone down the street, you hear a peculiar cry that you believe to have a magical source. Do you:</h1>

                    <div className="options-container">
                        <button onClick={() => { selectOption(0) }}>Proceed with caution, keeping one hand on your concealed wand and an eye out for any disturbance?	</button>
                        <button onClick={() => { selectOption(1) }}>Draw your wand and try to discover the source of the noise?	</button>
                        <button onClick={() => { selectOption(2) }}>Draw your wand and stand your ground?</button>
                        <button onClick={() => { selectOption(3) }}>Withdraw into the shadows to await developments, while mentally reviewing the most appropriate defensive and offensive spells, should trouble occur?</button>
                    </div>
                    <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(5) }}>submit</button>

                </div>
            </div>
        )

    }
}
