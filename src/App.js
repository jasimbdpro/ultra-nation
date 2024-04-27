import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  const handleAddCountry = (country) => {
    console.log(' country added', country)
  }


  return (
    <div className="App">

      <h1> country loaded: {countries.length} </h1>
      <h4>Country Added: </h4>
      <div>
        {
          countries.map(country => <Country handleAddCountry={handleAddCountry} key={country.cca3} country={country}> </Country>)
        }

      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
