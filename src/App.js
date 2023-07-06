import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './App.css';




export default function App(){

  const [ currentAdvice, SetCurrentAdvice ] = useState(" ");

  const fetchAdvice = () => {
    axios.get(`https://api.adviceslip.com/advice/${Math.floor(Math.random() * 250)}`)
      .then((response) => {
        const { advice } = response.data.slip;
        SetCurrentAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    
    <div className="app">
      <div className="card">
        <h1 className="heading">{currentAdvice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
          
  )
}

