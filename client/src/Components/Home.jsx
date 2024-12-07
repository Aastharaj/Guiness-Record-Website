import React from 'react';
import './Style.css';
import backgroundImage from './img.jpg';
import logo from './logo.png';

function Home() {
  return (
    <div className="main">
      <div className="background-image" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="overlay"></div> 
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <div className="content">
          <h1 className="heading">IADVL</h1>
          <p className="sub-heading">The Indian Association of Dermatologists, Venereologists and Leprologists</p>
          <p className="tagline">Committed to serve</p>
          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
