import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
// import { Button } from './Button';

function NavBar() {
    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const showButton = () => {
    //     if( window.innerWidth <= 960 ) {
    //         setButton( false );
    //     } else {
    //         setButton ( true );
    //     }
    // }

    // useEffect(() => {
    //     showButton();
    // }, []);

    // window.addEventListener('resize', showButton)

    return (
        <>
          <nav className="navbar"  >
              <div className="navbar-container">
                  <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                      TRAVEL <i className="fab fa-typo3"></i>
                  </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className = { click ? 'fas fa-times' : 'fas fa-bars' }></i>
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/luxury' className="nav-links" onClick={closeMobileMenu}>
                            Luxury
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/adventure' className="nav-links" onClick={closeMobileMenu}>
                            Adventure
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li> */}
                </ul>
                {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
              </div>
          </nav>
        </>
    )
}

export default NavBar