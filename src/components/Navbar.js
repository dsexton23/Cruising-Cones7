import React, { useState } from 'react';
import Logo from '../assets/cruisingConesLogo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';


function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)

  const toggleNavBar = () => {
      setOpenLinks(!openLinks)
  };

  return (
    <div className='navbar'>
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo} alt='logo' />
            <div className='hiddenLinks'>
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu</Link>
            <Link to="/events"> Events </Link>
            <Link to="/contact"> Contact </Link>
            </div>
        </div>
        <div className="rightSide"> 
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu</Link>
            <Link to="/events"> Events </Link>
            <Link to="/contact"> Contact </Link>
            <button onClick={toggleNavBar}>
              <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar