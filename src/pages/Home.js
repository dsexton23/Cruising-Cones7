import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import BackgroundImage from '../assets/trailer-bg-image1.webp';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BackgroundImage})`}}>
      <div 
        className="headerContainer">
        <h1>Cruising Cones 7</h1>
        <p>Mobile soft serve Ice Cream Truck</p>
        <Link to='/contact'>
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
}

export default Home