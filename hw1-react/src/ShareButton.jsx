import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './ButtonBar.css'

function copyURL() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert("URL copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy URL: ", err);
    });
}

function ShareButton() {
    return (
        <button onClick={copyURL} id="share-button">
            <img id="share-icon" src="./assets/share-button.png"></img>
        </button>
    );
}

export default ShareButton