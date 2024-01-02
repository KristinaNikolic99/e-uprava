import React from 'react';
import './Vrtici.css'
import BannerImage from '../../Components/Assets/background2.jpg'

export const Vrtici = () => {
  return (
    <div className='all' style={{backgroundImage: `url(${BannerImage})`}}>
         <div>
        <h1 className='heading-bg'>Vrtići Beograd: </h1>
        <section className='container'>
            <div className='card'>
                <div className='card-image car1'></div>
                <h2>Predškolska ustanova "Čika Jova Zmaj"</h2>
                <p>Ustanova je osnovana 1966. Ima 30 objekata, 4986 upisane dece i 759 zaposlenih radnika. Dopunski oblici rada sa decom su:
                    <br/>- Učenje engleskog jezika
                    <br/>- Ples
                </p>
                <a href=''>UPIŠI ME</a>
            </div>
            <div className='card'>
                <div className='card-image car2'></div>
                <h2>Predškolska ustanova "Rakovica"</h2>
                <p>
                    Odluka o osnivanju obdaništa u Rakovici doneta je 24 oktobra 1945. godine kada je otvoreno „Obdanište broj 20“. 
                   Pod nazivom  Predškolska ustanova „Rakovica“ ustanova posluje od 1993. godine.
                </p>
                <a href='' className='card2'>UPIŠI ME</a>
            </div>
            <div className='card'>
                <div className='card-image car3'></div>
                <h2>Predškolska ustanova "Poletarac"</h2>
                <p>
                    Osnovana je 1981. godine i jedna je od popularnijih ustanova za dečije obrazovanje u ovom delu Srbije.
                </p>
                <a href='' className='card3'>UPIŠI ME</a>
            </div>

            <div className='card'>
                <div className='card-image car1'></div>
                <h2>Predškolska ustanova "Čika Jova Zmaj"</h2>
                <p>Ustanova je osnovana 1966. Ima 30 objekata, 4986 upisane dece i 759 zaposlenih radnika. Dopunski oblici rada sa decom su:
                    <br/>- Učenje engleskog jezika
                    <br/>- Ples
                </p>
                <a href=''>UPIŠI ME</a>
            </div>
            <div className='card'>
                <div className='card-image car2'></div>
                <h2>Predškolska ustanova "Rakovica"</h2>
                <p>
                    Odluka o osnivanju obdaništa u Rakovici doneta je 24 oktobra 1945. godine kada je otvoreno „Obdanište broj 20“. 
                   Pod nazivom  Predškolska ustanova „Rakovica“ ustanova posluje od 1993. godine.
                </p>
                <a href='' className='card2'>UPIŠI ME</a>
            </div>
            <div className='card'>
                <div className='card-image car3'></div>
                <h2>Predškolska ustanova "Poletarac"</h2>
                <p>
                    Osnovana je 1981. godine i jedna je od popularnijih ustanova za dečije obrazovanje u ovom delu Srbije.
                </p>
                <a href='' className='card3'>UPIŠI ME</a>
            </div>
        </section>
    </div>
    </div>
   
  )
}
