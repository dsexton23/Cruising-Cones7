import React from 'react';
import menuPicture from '../assets/cc7menuimg.png';
import "../styles/Menu.css";

function Menu() {
  return (
    <div className='menu'>
        <img src={menuPicture} />
    </div>
  )
}

export default Menu