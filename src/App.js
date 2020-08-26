import React from 'react';
import Row from '../src/Row'
import './App.css';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title="Netflix Original" fetchUrl = {requests.fetchNetflixOriginals} />
      <Row title="Top Trending" fetchUrl = {requests.fetchTrending} />
    </div>
  );
}

export default App;
