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
          <Link to="/menu">
            <button> UPIŠI ME </button>
          </Link>
        
        </div>
      
      </div>
      <div class="achievements">

        <div class="work">
          <i class="fas fa-palette"></i>
          <p class="work-heading">Forma</p>
          <p class="work-text">Popunite jednostavnu online formu, sa svim relevantnim podacima, kao i overenom dokumentacijom.</p>
        </div>

        <div class="work">
          <i class="fas fa-book"></i>
          <p class="work-heading">Izbor vrtića</p>
          <p class="work-text">Mogućnost odabira željenog vrtića izborom odgovarajuće države, grada, opštine i naziva.</p>
        </div>
        
        <div class="work">
          <i class="fas fa-home"></i>
          <p class="work-heading">Registracija</p>
          <p class="work-text">Registrujte dete u željeni vrtić elektronskim putem, bez potrebe čekanja u velikim redovima.</p>
        </div>
      </div>
     </div>
    
  )
}

export default Home