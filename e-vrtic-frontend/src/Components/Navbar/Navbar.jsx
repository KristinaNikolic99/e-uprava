import React, { useState } from 'react';
import '../Navbar/Button.css'
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const history = useHistory();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          E-VRTIC
          <i className='fas fa-shapes' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Početna
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/podaci'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Podaci <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/vrtici'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Vrtići
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Kontaktirajte nas
            </Link>
          </li>
          <li className='nav-item'>
              {
                sessionStorage.getItem("korisnik") ? 
                <button className='btn' onClick={() => {
                  sessionStorage.clear();
                  history.push('/');
                }}>Sign Out</button> :
                <button className='btn' onClick={() => {
                  history.push('/login')
                }}
                  >Sign In</button>
              } 
          </li>
        </ul>
        
      </nav>
    </>
  );
}

export default Navbar;