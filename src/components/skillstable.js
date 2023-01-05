import './skillstables.css'
import React from 'react'
import { FaGit, FaGithub, FaHtml5, FaNodeJs} from 'react-icons/fa'

function Skillstable() {
  return (
    <div className='Tables'>
        <table>
            <tr>
                <td><FaHtml5/></td>
                <td><FaGithub/></td>
                <td><FaNodeJs/></td>
                <td><FaGit/></td>
                
            </tr>
        </table>
    </div>
  )
}

export default Skillstable