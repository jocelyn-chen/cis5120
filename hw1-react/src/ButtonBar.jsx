import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './ButtonBar.css'
import ShareButton from './ShareButton.jsx'
import HomeButton from './HomeButton.jsx'

function ButtonBar() {
    return (
        <div id="button-bar">
            <HomeButton />
            <ShareButton />
            <div id="settings-button">
                <img id="settings-icon" src="./assets/settings-button.png"></img>
            </div>
        </div>
        
    );
}

export default ButtonBar