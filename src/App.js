import React from 'react';
import './App.css'
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <browserRoutes className='app'>
      <Header/>
      <browserRoutes className='app_body'>
        <Home />
      </browserRoutes>
    </browserRoutes>
  )
}

export default App

