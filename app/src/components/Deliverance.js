import React, { Children } from 'react';
import '../Deliverance.css'


// function Greet() {
//     return <h1>Hello Kelvin</h1>
// }


const Deliverance = (props) => {
    console.log(props)
    return (
        <div className='DBD'>
            <div className='title'>
            <h1>
            {props.title}
            </h1>
            </div>
            <div className='description'>{props.description}</div>
        </div>
    ) 
    
}

export default Deliverance;