import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser,FaLock, FaUnlock, FaBalanceScale } from "react-icons/fa";
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';
import background from '../Assets/background-vrtic.jpg';
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LoginForm = () => {
  const [unlock, setUnlock] = useState(false);
  const history = useHistory();

  async function logIn(e) {
    e.preventDefault();
    const {username, password} = e.target.elements;
    try{
        await axios.get('http://localhost:8080/api/logIn', {
        params : {
            username: username.value,
            password: password.value,
        }
        }).then(res => {
            sessionStorage.setItem("korisnik", res.data);
            toast.success("User Login Successfully!!!", {
                position: toast.POSITION.TOP_CENTER,
            });
            setTimeout(() => {
                history.push('/vrtici');
            }, 1000);
            
        })
    } catch(err) {
        toast.error("User Login Unsuccessfully!!!", {
            position: toast.POSITION.TOP_CENTER,
        });
    }
    
    // axios.get('http://localhost:8080/api/logIn', {
    // params : {
    //     username: username.value,
    //     password: password.value,
    // }
    // }).then(res => {
    //     alert("User Login Successfully!!!");
    //     history.push('/home');
    // }).catch(err => alert(err));
        
    
  }

  return (
    <div className='login'> 
        <ToastContainer/>
        <div className='wrapper'>
        <form onSubmit={logIn}>
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" id='username' placeholder='Username' required/>
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type={unlock ? 'text' : 'password'} id='password' placeholder='Password' autoComplete="new-password" required/>
                {unlock ? <FaUnlock className='icon' onClick={() => setUnlock(!unlock)}/> : <FaLock className='icon' onClick={() => setUnlock(!unlock)}/>}
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href='/logIn'>Forgot password?</a>
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
