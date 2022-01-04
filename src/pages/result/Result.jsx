import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { pointsContext } from '../../context/pointsContext'
import './result.scss'
import house from './house.png'



export const Result = () => {

    let navigate = useNavigate()

    const { contextPoints, setContextPoints } = useContext(pointsContext)
    const [winnerHouse, setWinnerHouse] = useState(null)

    useEffect(() => {
        calcResults()


    }, []);

    function calcResults() {
        let max = contextPoints.gryffindorScore

        for (const key of Object.keys(contextPoints)) {


            console.log(key)
            console.log(contextPoints[key])

            if (max <= contextPoints[key]) {
                max = contextPoints[key]
                setWinnerHouse(key)

            }
        }

        //reseting results


        setContextPoints({
            gryffindorScore: 0,
            ravenclawScore: 0,
            hufflepuffScore: 0,
            slytherinScore: 0,
        })




    }




    return (
        <div className='result'>

            <div className="result-container">


                <h1>You are...</h1>
                <img src={house} />

                {winnerHouse === "gryffindorScore" && <div>
                    <h1>Gryffindor!</h1>

                    <h2>Gryffindor Traits and Strengths:</h2>

                    <p>
                        <h3>Courage:</h3> Gryffindors stand strong in the face of adversity and show bravery in everything they do. This can be overt (as in the case of Harry's bravery when facing Voldemort) or subtle (as in the case of Neville who continues to persevere even as he struggles with intense fear).

                        <h3>Daring:</h3> Gryffindors aren't reluctant to put themselves in physical danger when they feel there's a good reason. Harry, Ron, and Hermione run unflinchingly into danger time and time again.

                        <h3>Chivalry:</h3> Gryffindors feel a strong sense of responsibility to protect the weak and will act nobly, putting others before themselves. This trait makes them highly charismatic and popular with others.</p>

                    <h2>Gryffindor Weaknesses:</h2>

                    <p><h3>Hot-headedness:</h3> Because they're brave and daring, Gryffindors can sometimes react instinctively and ignore logic, leading to them being hot-headed and occasionally short-tempered. In The Philosopher's Stone, Harry chases Draco Malfoy into the sky on his broom over a fairly mild insult, despite the fact that he's never flown before and is putting himself in serious danger.

                       <h3> Recklessness:</h3> In addition to being hot-headed, many Gryffindors can be reckless in the pursuit of their goals. This happens when their daring and courage are misused or taken too far.

                       <h3> Arrogance:</h3> Gryffindors tend to be popular, charismatic, and good at most things that they do. Because of this, some Gryffindors can develop inflated senses of themselves and become arrogant.</p>

                </div>}

                {winnerHouse === "ravenclawScore" && <div>
                    <h1>Ravenclaw!</h1>

                    <h2>Ravenclaw Traits and Strengths:</h2>

                    <p>
                         <h3>Intelligence:</h3> While not all Ravenclaws are naturally intelligent, all members of the house have a strong thirst for knowledge and learning that places them among the best students in the Wizarding World, and this quality adds up to a generally high level of intelligence and knowledge among members of the House.

                        <h3> Curiosity:</h3> One of the main traits that defines the Ravenclaw House is a desire for exploration, inquiry, and learning. Ravenclaws are generally highly curious about the world around them and are constantly asking questions to expand their understanding.

                        <h3> Creativity:</h3> Ravenclaws tend to be "out-of-the-box" thinkers and as such can be highly creative. This creativity effects their spell-work and their way of relating to others and also means that many Ravenclaws are artistic and have unique approaches to solving problems.

                        <h3> Individuality:</h3> Ravenclaws are highly individualistic and don't tend to follow the crowd or succumb to peer pressure. In essence, they do what they want to do. This is most obviously exemplified by Luna Lovegood, who wears radish-like fruits as earrings and is fiercely true to her own identity, even when people tease her for it.
                    </p>

                    <h2>Ravenclaw Weaknesses:</h2>

                    <p>
                       <h3>  Disconnection From the Outside World:</h3> Because Ravenclaws tend to live inside their own heads, they can come across as vague, disconnected, or uninterested. Some are genuinely disdainful of others and the outside world, but most simply don't understand that their constant daydreaming is inappropriate in certain situations.

                       <h3>  Arrogance:</h3> Ravenclaws can be arrogant about their own intelligence and use it as a justification to view themselves as being better than others.

                       <h3>  Isolation:</h3> Some Ravenclaws purposefully isolate themselves from others... even from their fellow Ravenclaws. This isolation can occur for innocent reasons—for example, if they want to be alone to study for an upcoming test or read a good book—but it can also be a byproduct of arrogance. They may view themselves as being better than others and may be unwilling to associate with inferiors.
                    </p>

                </div>}


                {winnerHouse === "hufflepuffScore" && <div>
                    <h1>Hufflepuff!</h1>

                    <h2>Hufflepuff Traits and Strengths:</h2>

                    <p>
                      <h3>  Loyalty:</h3> Hufflepuffs make the most loyal friends a person can find. They also identify strongly with their House, as seen in The Goblet of Fire where the majority of Hufflepuffs turn against Harry because they think he's trying to undermine one of their own, Cedric Diggory.

                     <h3>  Dedication:</h3> Hufflepuffs are some of the most hard-working students and employees in the Wizarding World. While they may not have a Ravenclaw's natural love of learning and knowledge or a Slytherin's cunning and ambition, Hufflepuffs try their hardest in everything they do... and are rewarded for it.

                       <h3> Honesty:</h3> Hufflepuffs feel a strong desire to speak the truth and behave honestly in everything that they do. Gryffindors also value this trait, which is part of what makes Hufflepuff-Gryffindor friendships so strong.

                      <h3>  Humbleness:</h3> Unlike the other houses, which are all prone to arrogance, Hufflepuffs almost never display this trait. They are modest and humble in everything that they do and tend to stay away from those who exude self-importance.
                    </p>

                    <h2>Hufflepuff Weaknesses:</h2>

                    <p>
                      <h3>  Naivety:</h3> Hufflepuffs are generally optimists and are able to find the good in everything, but this does mean that they can be naive. If they're not careful, they can be easily tricked and taken advantage of.

                      <h3>  Low Self-Esteem:</h3> Because Hufflepuffs have a tendency towards modesty, they can sometimes fail to see their own worth. At best, this can cause them to simply underestimate themselves, but at worst it can cause severe problems with a lack of confidence and self-worth.

                       <h3> Lack of Ambition:</h3> Hufflepuffs are the antithesis of Slytherins. They struggle with ambition and can become stuck in situations which are beneath their capabilities or don't challenge them enough.
                    </p>

                </div>}


                {winnerHouse === "slytherinScore" && <div>
                    <h1>Slytherin!</h1>

                    <h2>Slytherin Traits and Strengths:</h2>

                    <p>
                        <h3>Ambition:</h3> A trait that nearly all Slytherins have in common is ambition. They want to be the best: the smartest in the class, the most popular in a group of friends, the boss at work. Because of their strong drive and work ethic, they often achieve these heights, too, becoming invaluable members of society and powerful in the work world.

                        <h3>Cunning:</h3> Slytherins are highly intelligent, but not in the same way as Ravenclaws. Rather than seeking to expand their knowledge, Slytherins simply find ways to use their existing skills to their advantage. This makes them clever and cunning and can aid them in their quest for fame and power.

                        <h3>Resourcefulness:</h3> Slytherins are able to make the best of any situation. They're highly adaptable and resourceful and can find ways to turn even the worst situations to their advantage.

                        <h3>Determination:</h3> Like Hufflepuffs, Slytherins are highly determined. Their determination, however, is more self-focused. They will use their strong work ethic to fulfill their ambition and advance their own position. While this may seem self-absorbed, Slytherins recognise that by focusing on self-improvement, they can become better friends and family members and be more useful to society as a whole.
                    </p>

                    <h2>Slytherin Weaknesses:</h2>

                    <p>
                       <h3> Machiavellian Tendencies:</h3> "The end justifies the means" might as well be the Slytherin house motto. Slytherins will often do morally ambiguous things to achieve their goals. This can be a positive (as they're willing to get their hands dirty to get things done while members of other houses may shy away), but it can also make them seem cold and calculating.

                       <h3> Power Hunger:</h3> When Slytherins don't place any checks and balances on their natural ambition, it can have disastrous consequences. They can become obsessed with gaining power. This can cause them to be fixated on surrounding themselves with powerful people, as in the case of Professor Slughorn. At worst, it can cause them to abandon all morality in their obsession with power and do horrific and depraved things, as seen in the case of Lord Voldemort's quest for power over the Wizarding World.

                       <h3> Discrimination:</h3> Over the course of the books, time and time again the reader witnesses Slytherins attack those wizards who aren't pure-blood and bully others who they perceive as being weak even if they are pure of blood, such in the case of Malfoy's torment of Neville. Some Slytherins have a tendency towards arrogance and can insult and demean those who they see as being inferior.
                    </p>

                </div>}








                <button onClick={() => { navigate('/') }}>Go back to start</button>

            </div>

        </div>
    )
}
