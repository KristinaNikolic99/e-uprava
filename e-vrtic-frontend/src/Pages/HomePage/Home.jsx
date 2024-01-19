import React from 'react';
import '../HomePage/Home.css'
import BannerImage from '../../Components/Assets/vrtic-home.jpg'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="home" style={{ backgroundImage: `linear-gradient( to bottom, rgba(85,85,85, 0.8) 0%, rgba(0, 0, 0, 0) 100% ), url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1> ELEKTRONSKI VRTIĆ </h1>
          <p className='opis1'> Brz, lak i efikasan način upisa u bilo koji vrtić širom Srbije!</p>
          <Link to="/vrtici">
            <button> UPIŠI ME </button>
          </Link>
        
        </div>
      
      </div>
      <div className="achievements">

        <div className="work">
          <i className="fas fa-palette"></i>
          <p className="work-heading">Forma</p>
          <p className="work-text">Popunite jednostavnu online formu, sa svim relevantnim podacima, kao i overenom dokumentacijom.</p>
        </div>

        <div className="work">
          <i className="fas fa-book"></i>
          <p className="work-heading">Izbor vrtića</p>
          <p className="work-text">Mogućnost odabira željenog vrtića izborom odgovarajuće države, grada, opštine i naziva.</p>
        </div>
        
        <div className="work">
          <i className="fas fa-home"></i>
          <p className="work-heading">Registracija</p>
          <p className="work-text">Registrujte dete u željeni vrtić elektronskim putem, bez potrebe čekanja u velikim redovima.</p>
        </div>
      </div>
     </div>
    
  )
}

export default Home