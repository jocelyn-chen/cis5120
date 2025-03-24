import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './StatusBar.css'

function StatusBar({time}) {
    return (
        <>
            <div id="dynamic-island"></div>
            <img id="status-bar" src="./assets/Status Bar - iPhone.png"></img>
            <p id="time">{time}</p>
        </>
        
    );
}

export default StatusBar