import React from 'react'
import ReactDOM from 'react-dom/client'
import { PokemonApp } from './PokemonApp.jsx'

import { BrowserRouter } from 'react-router-dom';

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
