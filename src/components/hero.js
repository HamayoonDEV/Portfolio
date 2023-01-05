import './hero.css'
import React from 'react'
/* Importing image for background */
import myimg from "./assets/IMG_20220710_220657_003.jpg"
import { Link } from 'react-router-dom'

const Hero= () => {
  return (
    <>
          {/* Main container 'hero' */}    
        <div className='hero' >
          {/*image container  */}
        <div className='mask'>
            <img className='intro-img' src={myimg} alt = 'myimg' />
        </div>
        {/* Text container for home page */}
        <div className='content'>
            <p>Hi,I'm a Software Engineer</p>
            <h1>React Developer</h1>
        {/*buttons container for home page */}
        <div className='btn-container'>
            <Link to="/projects" className='btn' >Projects</Link>
            <Link to = '/contect'className='btn btn-light'>Contect</Link>
        </div>
        </div>
    </div>
    </>

  )
}

export default Hero  