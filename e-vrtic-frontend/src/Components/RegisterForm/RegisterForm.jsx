import React, { useState } from 'react';
import './RegisterForm.css';
import { FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { Country, City }  from 'country-state-city';

export const RegisterForm = () => {
  const [cities, setCities] = useState([]);
  return (
    <div className='register'>
        <div className='wrapper'>
        <form action="">
        <h1>Register</h1>
        <div className='input-box'>
            <input type="text" placeholder='Name' required/>
        </div>
        <div className='input-box'>
            <input type="text" placeholder='Surname' required/>
        </div>
        <div className='input-box'>
            <input type="text" placeholder='JMBG' required/>
        </div>
        <div className='input-box'>
            <div className='select'>
                <select name="drzave" id="drzave" onChange={(e) => setCities(City.getCitiesOfCountry(e.target.value))}>
                <option value="" selected disabled>Izaberite drzavu...</option>
                    {
                        Country.getAllCountries().map(country => <option value={country.isoCode}>{country.flag} {country.name}</option>)
                    }
                </select>
            </div>
        </div>
        <div className='input-box'>
            <div className='select'>
                <select name="gradovi" id="gradovi">
                <option value="" selected disabled>Izaberite grad...</option>
                    {
                        cities.map(city => <option value={city.name}> {city.name}</option>)
                    }
                </select>
            </div>
        </div>
        <div className='input-box'>
            <input type="text" placeholder='Username' required/>
        </div>
        <div className="input-box">
            <input type="password" placeholder='Password' autoComplete="new-password" required/>
            <FaLock className='icon'/>
        </div>
        
        <button type='submit'>Sign Up</button>

        <div className="register-link">
                <p>Already have an account? <Link to="/">Login</Link></p>
            </div>
        </form>
        
    </div>
    </div>
    
  )
}
