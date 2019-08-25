import React from 'react';
import './App.css';
import CountriesContainer from './components/countriescontainer'
import 'font-awesome/css/font-awesome.min.css';
import InfoContainer from './components/infocontainer';

function App() {
  return (
    <div className="App">
      <InfoContainer />
      <CountriesContainer />
    </div>
  );
}

export default App;