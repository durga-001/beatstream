import React from 'react'
import ReactDOM from 'react-dom/client' // Import ReactDOM here
import './index.css'
import App from './App.jsx'
import PlayerContextProvider from './context/PlayerContext.jsx'
import { BrowserRouter } from 'react-router-dom'

// 1. Get the root element
const rootElement = document.getElementById('root');

// 2. Create the root using ReactDOM, not React
const root = ReactDOM.createRoot(rootElement);

// 3. Render your app
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <PlayerContextProvider>
      <App />
    </PlayerContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);