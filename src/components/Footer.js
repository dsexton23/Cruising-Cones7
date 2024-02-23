import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../styles/Footer.css";


function Footer() {
  const instagramUrl = 'https://www.instagram.com/cruisingcones7/';
  const facebookUrl = 'https://www.facebook.com/people/Cruising-Cones-7/';

  return (
    <div className="footer">
      <div className="socialMedia">

      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
      </div>

      <p> cruisingcones7@gmail.com </p>
    </div>
  );
}

export default Footer