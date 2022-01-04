import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { pointsContext } from '../../context/pointsContext'
import './question.scss'


export const Question8 = () => {


    //possible questions

    // (0) black/white
    // (1) heads/tails
    // (2) left/right


    //QUESTION #1
    let navigate = useNavigate()

    useEffect(() => {

        //generate questions id when render
        setChosenSet(Math.floor(Math.random() * 3))

    }, []);

    const { contextPoints, setContextPoints } = useContext(pointsContext)

    //selected option hook
    const [chosenSet, setChosenSet] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)
    const [loading, setLoading] = useState(false)


    //change selection onclick handler
    function selectOption(option) {
        setSelectedOption(option)
    }

    function modifyPoints(gryffindor, ravenclaw, hufflepuff, slytherin) {
        setContextPoints({
            gryffindorScore: contextPoints.gryffindorScore + gryffindor,
            ravenclawScore: contextPoints.ravenclawScore - ravenclaw,
            hufflepuffScore: contextPoints.hufflepuffScore - hufflepuff,
            slytherinScore: contextPoints.slytherinScore + slytherin,

        })

    }



    function submitQuestion1(setId) {

        if (selectedOption !== null) {

            switch (setId) {


                //option (0) black/white
                case 0:


                    switch (selectedOption) {


                        //black
                        case 0:


                            modifyPoints(28.91718573, -21.62314612, -30.0065675, 25.44278097)


                            break;

                        //white
                        case 1:


                            modifyPoints(-29.32055396, 24.3783615, 32.97249578, -25.34810279)


                            break;


                        default:
                            break;

                    }

                    break;

                // (1) heads/tails
                case 1:

                    switch (selectedOption) {

                        //heads
                        case 0:



                            modifyPoints(-25.36928858, 22.41930741, 32.6497265, -27.11046939)

                            break;

                        //tails
                        case 1:

                            modifyPoints(30.63227296, -23.60407631, -31.08418312, 25.892524)


                            break;


                        default:
                            break;

                    }
                    break;


                // (2) left/right
                case 2:

                    switch (selectedOption) {

                        //left
                        case 0:

                            modifyPoints(-27.37364476, 28.45701138, -23.55695615, 25.02450925)

                            break;

                        //right
                        case 1:

                            modifyPoints(27.02941592, -27.55102988, 25.78541162, -23.44987827)


                            break;


                        default:
                            break;

                    }
                    break;


            }


            //calc final results (delay for a cool effect ;) ) 
            setLoading(true)
            setTimeout(() => {
                navigate('/results')
                setLoading(false)
            }, 1000)

        }

    }

    //show DUSK/DAWN 
    if (chosenSet === 0) {
        return (
            <div className='question'>

                <div className="question-container">

                    <h1>BLACK OR WHITE</h1>

                    <div className="options-container">
                        <button onClick={() => { selectOption(0) }}>Black</button>
                        <button onClick={() => { selectOption(1) }}>White</button>
                    </div>
                    {loading && <button disabled className='submit-button' onClick={() => { submitQuestion1(2) }}>Loading Results </button>}
                    {!loading && <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(2) }}>submit </button>}

                </div>
            </div>
        )

        //show FOREST/RIVER
    } else if (chosenSet === 1) {

        return (
            <div className='question'>

                <div className="question-container">

                    <h1>Heads or Tails?</h1>
                    <div className="options-container">

                        <button onClick={() => { selectOption(0) }}>Heads</button>
                        <button onClick={() => { selectOption(1) }}>Tails</button>

                    </div>
                    {loading && <button disabled className='submit-button' onClick={() => { submitQuestion1(2) }}>Loading Results </button>}
                    {!loading && <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(2) }}>submit </button>}
                </div>
            </div>
        )



        //show MOON/STARS
    } else if (chosenSet === 2) {


        return (
            <div className='question'>

                <div className="question-container">
                    <h1>Left or Right</h1>
                    <div className="options-container">

                        <button onClick={() => { selectOption(0) }}>Left</button>
                        <button onClick={() => { selectOption(1) }}>Right</button>
                    </div>

                    {loading && <button disabled className='submit-button' onClick={() => { submitQuestion1(2) }}>Loading Results </button>}
                    {!loading && <button disabled={selectedOption === null} className='submit-button' onClick={() => { submitQuestion1(2) }}>submit </button>}
                </div>
            </div>
        )

    }
}
