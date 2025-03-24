import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './ButtonBar.css'

function SettingsButton() {
    return (
        <div id="settings-button">
            <img id="settings-icon" src="./assets/settings-button.png"></img>
        </div>
        
    );
}

export default SettingsButton