import React, { useEffect, useState } from 'react';
import './Vrtici.css';
import BannerImage from '../../Components/Assets/background2.jpg';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios';

export const Vrtici = () => {

    const history = useHistory();
    const [vrtici, setVrtici] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/vrtici")
            .then(res => {
                setVrtici(res.data);
            })
    }, []);

  return (
    <div className='all' style={{backgroundImage: `url(${BannerImage})`}}>
         <div>
        <h1 className='heading-bg'>Vrtići Beograd: </h1>
        <section className='container'>
            {   
                vrtici?.map((vrtic) => (
                    <div className='card' key={vrtic.vrtic_id}>
                        <div className='card-image' 
                        style={{backgroundImage: `url(/images/${vrtic.slika})`}}>
                        </div>
                        <h2>{vrtic.naziv}</h2>
                        <p style={{textAlign: "justify"}}>
                            {vrtic.opis}
                        </p>
                        <a href='' onClick={() => {history.push('/child-registration')}}>UPIŠI ME</a>
                    </div>
                ))
            }
        
        </section>
    </div>
    </div>
   
  )
}
