import React, { useEffect, useState } from 'react';
import './Vrtici.css';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios';

export const Vrtici = () => {

    const history = useHistory();
    const [vrtici, setVrtici] = useState([]);
    const [grad, setGrad] = useState("Beograd");

    useEffect(() => {
        axios.get("http://localhost:8080/api/vrtici")
            .then(res => {
                setVrtici(res.data);
            })
    }, []);

  return (
    <div className='all'>
        <div>
            <h1 className='heading-bg'>Vrtići {grad}: </h1>
            <div>
                <select className="gradovi" name="gradovi" id="gradovi" onChange={(e) => setGrad(e.target.value)}>
                    <option value="Beograd">Beograd</option>
                    <option value="Novi Sad">Novi Sad</option>
                    <option value="Niš">Niš</option>
                    <option value="Jagodina">Jagodina</option>
                    <option value="Kragujevac">Kragujevac</option>
                    <option value="Kraljevo">Kraljevo</option>
                    <option value="Valjevo">Valjevo</option>
                    <option value="Vranje">Vranje</option>
                    <option value="Subotica">Subotica</option>
                    <option value="Pirot">Pirot</option>
                    <option value="Ruma">Ruma</option>
                    <option value="Inđija">Inđija</option>
                </select>
            </div>
            <section className='container'>
                {   
                    vrtici?.map((vrtic) => (
                        vrtic.grad === grad &&
                        <div className='card' key={vrtic.vrtic_id}>
                            <div className='card-image' 
                            style={{backgroundImage: `url(/images/${vrtic.slika})`}}>
                            </div>
                            <h2>{vrtic.naziv}</h2>
                            <p style={{textAlign: "justify"}}>
                                {vrtic.opis}
                            </p>
                            <a href='' onClick={(e) => {
                                e.preventDefault();
                                sessionStorage.getItem("korisnik") ?
                                history.push({pathname: '/child-registration', search: `?id=${vrtic.vrtic_id}`}) :
                                //history.push('/child-registration/'+vrtic.vrtic_id) :
                                history.push('/login')
                            }}>UPIŠI ME</a>
                        </div>
                    ))
                }
            </section>
        </div>
    </div>
   
  )
}
