import React, { useEffect, useRef, useState } from 'react';
import './ChildRegistration.css';
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import jmbg from "regex-jmbg";


export const ChildRegistration = () => {

    async function register_child(e) {
        e.preventDefault();
        const {childName, childSurname, childJmbg, birthday, gender} = e.target.elements;
        // const {korisnik_id} = JSON.parse(sessionStorage.getItem("korisnik"));
        // console.log(JSON.parse(sessionStorage.getItem("korisnik")).korisnik_id);
        console.log(jmbg().test('1304005111059'));

        if(!jmbg().test(childJmbg)) {
            toast.error("Uneseni jmbg je nevalidan, pokusajte ponovo!!!", {
                position: toast.POSITION.TOP_CENTER,
            });
            e.target.reset();
            return;
        }

        try {
            await axios.post("http://localhost:8080/api/register_child",{
                ime: childName.value,
                prezime: childSurname.value,
                jmbg: childJmbg.value,
                datumRodjenja: birthday.value,
                pol: gender.value,
                korisnik_id: JSON.parse(sessionStorage.getItem("korisnik")).korisnik_id
            });
            toast.success("Uspesno registrovano dete!!!", {
                position: toast.POSITION.TOP_CENTER,
            });
        } catch (err) {
            toast.error("Forma neuspesno podnesena, proverite sva polja!!!", {
                position: toast.POSITION.TOP_CENTER,
            });
        }

        e.target.reset();
      }


  return (
    <div className='registerChild'>
        <ToastContainer/>
        <div className='wrapper-CR'>
            <form onSubmit={register_child}>
                <h1>Registracija deteta u odabrani vrtić</h1>
                <div className='input-box-CR'>
                    <input type='text' id='childName' placeholder='Unesite ime deteta' required
                    />
                </div>
                <div className='input-box-CR'>
                    <input type='text' id='childSurname' placeholder='Unesite prezime deteta' required
                    />
                </div>
                <div className='input-box-CR'>
                    <input type='text' id='childJmbg' placeholder='Unesite JMBG deteta' required
                    />
                </div>
                <div className='input-box-CR'>
                    <label for='birthday'>Datum rođenja: </label>
                    <input type='date' id='birthday' required />
                </div>
                <div className='input-box-CR'>
                    <label for='gender'>Pol: </label>
                    <input type='radio' name='gender' id='gender' value='Musko'/> Muško
                    <input type='radio' name='gender' id='gender' value='Zensko'/> Žensko
                </div>
                <button type='submit'>Registruj dete</button>
            </form>
        </div>
    </div>
  )
}
