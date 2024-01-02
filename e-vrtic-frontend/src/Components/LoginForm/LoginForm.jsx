import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser,FaLock, FaUnlock, FaBalanceScale } from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom';
import background from '../Assets/background-vrtic.jpg'

export const LoginForm = () => {
  const [unlock, setUnlock] = useState(false);

  return (
    <div className='login'> 
        <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required/>
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type={unlock ? 'text' : 'password'} placeholder='Password' autoComplete="new-password" required/>
                {unlock ? <FaUnlock className='icon' onClick={() => setUnlock(!unlock)}/> : <FaLock className='icon' onClick={() => setUnlock(!unlock)}/>}
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href='/login'>Forgot password?</a>
            </div>

            <button type='submit'>Login</button>

            <div className="register-link">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </form>
    </div>
    </div>
        
  );
};
