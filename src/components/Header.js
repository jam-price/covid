import React from 'react';
import covid19 from '../Media/logo.png';
import '../styles/Header.css';

function Header() {
  return (
    <header id="header">
      <div className="logo">
        <img id="logo" alt="Cartoon covid-19" src={covid19}></img>
      </div>
      <h1 className="title">Covid-19 Tracker UK</h1>
      <p>Find the latest figures from your area</p>
    </header>
  );
}

export default Header