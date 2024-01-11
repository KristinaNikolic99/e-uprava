import React from 'react';
import './ChildRegistration.css'

export const ChildRegistration = () => {
  return (
    <div className='registerChild'>
        <div className='wrapper-CR'>
            <form>
                <h1>Child Registration</h1>
                <div className='input-box-CR'>
                    <input type='text' id='child-name' placeholder='Enter Child Name'/>
                </div>
                <div className='input-box-CR'>
                    <input type='text' id='child-surname' placeholder='Enter Child Surname'/>
                </div>
                <div className='input-box-CR'>
                    <label for='birthday'>Birthday: </label>
                    <input type='date' id='birthday'/>
                </div>
                <div className='input-box-CR'>
                    <label for='gender'>Gender: </label>
                    <input type='radio' name='gender' value='male'/> Male
                    <input type='radio' name='gender' value='female'/> Female
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>
    </div>
  )
}
