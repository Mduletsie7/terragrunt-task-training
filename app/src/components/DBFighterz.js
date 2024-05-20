import React from 'react';
import '../DBFighterz.css'


// function Greet() {
//     return <h1>Hello Kelvin</h1>
// }


const DBFighterz = (props) => {
    console.log(props)
    return (
        <div className='DBFZ'>
            <div className='gameTitle'>
            <img className='fighterzLogo' src={process.env.PUBLIC_URL + "/images/FighterzLogo.png"} width="820" alt='Dragonball FighterZ Logo'/>
            {/* <h1>
            {props.title} {props.heroName}
            </h1> */}
            </div>
            <div className='gameRating'>{props.rating}</div>
            <div className='ratingView'>
            <img className='starRating' src={process.env.PUBLIC_URL + "/images/rating.png"} width="820" alt='Vegeta ultra ego'/>
            </div>
        </div>
    ) 
    
}

export default DBFighterz;