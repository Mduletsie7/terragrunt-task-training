import React from 'react'
import '../Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
          
            <img src={process.env.PUBLIC_URL + "/images/Logo.png"} alt='DragonBall Wiki Logo' />
            {/* <h2>Broly Look! We speak Dragonball</h2> */}
        </div>
        <div className='header__center'>

        </div>
        <div className='header__right'>
            <button className='signBtn'>Sign In</button>
            <button className='signBtn'>Sign Up</button>
        </div>
    </div>
  )
}

export default Header