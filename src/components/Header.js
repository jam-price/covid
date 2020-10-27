import React from 'react';
import covid19 from '../Media/logo.png';
import '../styles/Header.css';
import zoe from '../Media/zoe.png'

function Header() {
  return (
    <header id="header">
      <div className="logo">
        <img id="logo" alt="Cartoon covid-19" src={covid19}></img>
      </div>
      <h1 className="title">Covid-19 Tracker UK</h1>
      <p>Find the latest figures from your area</p>

      <div className="zoe">
        <a href="https://covid.joinzoe.com/">
          <img src={zoe} alt="" srcset=""/>
          <p>Join King's College's ZOE study</p>
        </a>
      </div>

    </header>
  );
}

export default Header