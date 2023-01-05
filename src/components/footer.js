import './footer.css'
import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaPhone, FaSkype, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{ color:"white"}} className = 'home-icon'/>
                       <p> Defance phase 4 Karachi</p>
                        <p>,Pakistan</p>
                    
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{ color:"white"}} className= 'phone-icon'/>
                    +923133795446 <p>  +923223199109 </p></h4>
                    
                </div>
                <div className='email'>
                    <h4> <FaEnvelope size={20} style={{ color:"white"}} className = 'email-icon'/>
                        hamayoonkhan367@gmail.com </h4>  
                </div>
            </div>
            <div className='right'>
            <div className='social-icons'>
                    <FaFacebook size={40} style={{ color:"white"  }} className="facebook-icon" />
                    <FaLinkedin size={40} style={{ color:"white"}} className="linkedin-icon"/>
                    <FaSkype size={40} style={{ color:"white"}} className="skype-icon" />
                    <FaInstagram size={40} style={{ color:"white"}} className ='instagram-icon' />
                    <FaGithub size={40} style={{ color:"white"}} className ='github-icon' />
                    <FaTwitter size={40} style={{ color:"white"}} className ='twitter-icon' />
                </div>
            </div>
            <div className='copyright'>
                <h1>HAMAYOON</h1>
                <div className='copyright-tag' >
                <span>&copy;Copyright <strong> HAMAYOON </strong></span>
                <p>ALL RIGHTS RESERVED</p>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Footer