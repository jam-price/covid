import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './styles/SearchBar.css';
import Display from './components/Display'

function App() {

  const [country, setCountry] = useState('england');
  const [data, setData] = useState();
  const [areaType, setAreaType] = useState('nation');
  const [region, setRegion] = useState('');
  const [localArea, setLocalArea] = useState('')
  console.log(country)
  console.log(areaType)
  console.log(region)

  useEffect(() => {
    getData()
  }, [country])

  let areaName;
  if (areaType === 'nation') {
    areaName = country
  } else if(areaType === 'region') {
    areaName = region
  }  else {
    areaName = localArea
  }

    // documentation https://coronavirus.data.gov.uk/developers-guide

    let url = `https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=${areaType};areaName=${areaName}&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeathsByDeathDate":"newDeathsByDeathDate","cumDeathsByDeathDate":"cumDeathsByDeathDate"}`;

  const getData = async () => {
    try{
      const response = await fetch(url);
      if(response.ok){
        const jsonResponse = await response.json();
        setData(jsonResponse.data);
      } else {
        throw new Error('Could not get data')
      }
    } catch (error) {
      alert('Could not get data. Try changing the search criteria.')
    }
    
  };

  // load display once data is fetched
  let display = <div></div>
  if (data === undefined) {
    display = <div></div>
  } else display = <Display className="display" data={data} />


  return (
    <div className="App">
      <Header className="header" />
      <SearchBar
        className="searchbar"
        country={country}
        setCountry={setCountry}
        areaType={areaType}
        setAreaType={setAreaType}
        region={region}
        setRegion={setRegion}
        localArea={localArea}
        setLocalArea={setLocalArea}
      />
      <button className="search-button" onClick={getData}>Search</button>
      {display}
    </div>
  );
}

export default App;
