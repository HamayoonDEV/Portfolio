import './form.css'
import React from 'react'

function Form() {
  return (
    <div className='form'>
        <form>

        
        <label>Name</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='email'></input>
        <label>Subject</label>
        <input type='text'></input>
        <label>Message</label>
        <textarea cols='6' rows='4' placeholder='Type message here' ></textarea>
        <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form