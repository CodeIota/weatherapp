import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WeatherApp from './pages/weather/WeatherApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>
);

reportWebVitals();
