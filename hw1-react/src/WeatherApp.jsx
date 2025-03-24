import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './WeatherApp.css'
import StatusBar from './StatusBar.jsx'
import ButtonBar from './ButtonBar.jsx'
import ScrollableArea from './ScrollableArea.jsx'
import LocationScrollBar from './LocationScrollBar.jsx'

function WeatherApp() {

  return (
    <div id="weather-app">
      <StatusBar time="3:19"/>
      <ButtonBar />
      <ScrollableArea/>
      <LocationScrollBar/>
    </div>
  );
}

export default WeatherApp
