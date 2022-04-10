import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
const [click, setclick] = useState(false);
const handleClick = () =>{
    setclick(!click);
}
const closeMenu = () =>{
    setclick(false);
}
  return <>
          <nav className="navbar">
            <div className="navbar-container">
                
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                 AsharOP <i className="fab fa-typo3"/>
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>

                <ul className={click ? 'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Services' className='nav-links' onClick={closeMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Products' className='nav-links' onClick={closeMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/SignUp' className='btn btn-outline-light mt-4' onClick={closeMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul> 

                {/* <button class="btn btn-outline-light" type="submit">Search</button> */}

            </div>
          </nav>  
        </>;
};

export default Navbar;
