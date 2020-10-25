import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './styles/SearchBar.css';



function App() {

  const [country, setCountry] = useState('england');
  console.log(country)

  // documentation https://coronavirus.data.gov.uk/developers-guide

  let url = `https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=${country}&structure={%22date%22:%22date%22,%22newCases%22:%22newCasesByPublishDate%22}`;

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
  };

  return (
    <div className="App">
      <Header />
      <SearchBar
      country = {country}
      setCountry = {setCountry}
       />
      <button onClick={getData}>Search</button>
    </div>
  );
}

export default App;
