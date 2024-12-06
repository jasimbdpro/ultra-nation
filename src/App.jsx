import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const url = "https://raw.githubusercontent.com/jasimbdpro/ultra-nation/main/src/assets/restcountries.json";
    fetch(url)
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart)
  }


  return (
    <div className="App">

      <h1> country loaded: {countries.length} </h1>
      <h4>Country Added: {cart.length} </h4>
      <Cart cart={cart}></Cart>
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
