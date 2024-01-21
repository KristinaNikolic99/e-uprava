import React, { useState } from 'react';
import './RegisterForm.css';
import { FaLock } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';
import { Country, City }  from 'country-state-city';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jmbg from "regex-jmbg";

export const RegisterForm = () => {

  const [drzava, setDrzava] = useState("");
  const [cities, setCities] = useState([]);
  const history = useHistory();


  async function register(e) {
    e.preventDefault();
    const {name, surname, JMBG, gradovi, email, username, password} = e.target.elements;
    console.log(email.value);
    if(!jmbg().test(JMBG.value)) {
        toast.error("Uneseni jmbg je nevalidan, pokusajte ponovo!!!", {
            position: toast.POSITION.TOP_CENTER,
        });
        e.target.reset();
        return;
    }

    try {
        await axios.post("http://localhost:8080/api/register",{
        ime: name.value,
        prezime: surname.value,
        jmbg: JMBG.value,
        drzava,
        grad: gradovi.value,
        email: email.value,
        username: username.value,
        password: password.value,
        });
        toast.success("User Registration Successfully!!!", {
            position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => {
            history.push('/login');
        }, 1000);
           
            
    } catch (err) {
        toast.error("User Registration Unsuccessfully!!!", {
            position: toast.POSITION.TOP_CENTER,
        });
    }
  }
    
  return (
    <div className='register'>
        <ToastContainer/>
        <div className='wrapper'>
        <form onSubmit={register}>
        <h1>Register</h1>
        <div className='input-box'>
            <input type="text" id='name' placeholder='Name' required/>
        </div>
        <div className='input-box'>
            <input type="text" id='surname' placeholder='Surname' required/>
        </div>
        <div className='input-box'>
            <input type="text" id='JMBG' placeholder='JMBG' required/>
        </div>
        <div className='input-box'>
            <div className='select'>
                <select name="drzave" id="drzave" defaultValue={""} onChange={(e) => {
                    setCities(City.getCitiesOfCountry(e.target.value));
                    setDrzava(Country.getCountryByCode(e.target.value).name);
                }}>
                <option value="" disabled>Izaberite drzavu...</option>
                    {
                        Country.getAllCountries().map(country => <option value={country.isoCode} key={country.isoCode}
                        >{country.flag} {country.name}</option>)
                    }
                </select>
            </div>
        </div>
        <div className='input-box'>
            <div className='select'>
                <select name="gradovi" id="gradovi" defaultValue={""}>
                <option value="" disabled>Izaberite grad...</option>
                    {
                        cities.map((city, index) => <option value={city.name} key={index}> {city.name}</option>)
                    }
                </select>
            </div>
        </div>
        <div className='input-box'>
            <input type="email" id='email' placeholder='Email' required/>
        </div>
        <div className='input-box'>
            <input type="text" id='username' placeholder='Username' required/>
        </div>
        <div className="input-box">
            <input type="password" id='password' placeholder='Password' autoComplete="new-password" required/>
            <FaLock className='icon'/>
        </div>
        
        <button type='submit'>Sign Up</button>

        <div className="register-link">
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </form>
        
    </div>
    </div>
    
  )
}