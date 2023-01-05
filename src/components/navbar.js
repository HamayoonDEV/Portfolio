/* importing all required libraries */
import "./navbar.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"

/* using arrow function for the Hamburgar logo for mobile */
const Navbar = () => {
    const [click,setclick]= useState(false)
    const handleClick = ()=>setclick(!click)

    /*using arrow function for nav bar appearance and disappearance */
    const [color,setColor] = useState(false)
    const backgroundColor = ()=>{
        if(window.scrollY >10){
          setColor(true)
        }else{
          setColor(false)
        }
    }
    window.addEventListener("scroll",backgroundColor)
  return (
    <>  
            
        <div className={color?"header header-bg":"header"} >
        <Link  to = {"/"} ><h1>HAMAYOON</h1></Link>
        <ul className={click ? "nav-manu active" : "nav-manu"}>
            {/* using links of every page*/} 
            <li><Link to = {'/'} >Home</Link></li>
            <li><Link to = {'/skills'} >Skills</Link></li>
            <li><Link to = {'/projects'} >Projects</Link></li>
            <li><Link to = {'/contect'} >Contect</Link></li>
        </ul>
        {/*creating Hamburgar logo */}
        <div className="hambarger" onClick={handleClick}>
            {click?( <FaTimes size={20} style = {{color:"white"}}/>):(<FaBars size={20} style = {{color:"white"}}/>)}   
           
        </div>
    </div>
    </>

  )
}

export default Navbar