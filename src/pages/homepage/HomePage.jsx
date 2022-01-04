import React from 'react'
import { useNavigate } from 'react-router-dom'
import './homepage.scss'


export const HomePage = () => {


    let navigate = useNavigate()


    return (
        <div className='homepage'>

            <div className="homepage-center-container">


                <h1>Harry Potter Sorting Quiz</h1>

                <button onClick={() => { navigate("/questions") }}>START</button>
                {/* <button onClick={() => { navigate("/results") }}>results</button> */}

                <h2>made by: Emiliano Villalpando</h2>

            </div>
        </div>
    )
}
