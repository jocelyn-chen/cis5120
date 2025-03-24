import './Forecast.css'
import ForecastSection from './ForecastSection'
import React, { useEffect, useRef } from 'react';


function DailyForecast() {
    const forecasts = [
        ["Wed", "48", "71", "cloudy"],
        ["Thur", "46", "67", "cloudy"],
        ["Fri", "53", "72", "partly-cloudy"],
        ["Sat", "57", "79", "sunny"],
        ["Sun", "58", "81", "sunny"],
        ["Mon", "53", "76", "sunny"],
        ["Tue", "50", "72", "partly-cloudy"],
        ["Wed", "48", "68", "sunny"],
        ["Thu", "52", "73", "sunny"],
        ["Today", "53", "75", "sunny"],
        ["Sat", "56", "78", "partly-cloudy"],
        ["Sun", "50", "72", "partly-cloudy"],
        ["Mon", "47", "67", "cloudy"],
        ["Tue", "45", "68", "cloudy"],
        ["Wed", "52", "71", "partly-cloudy"],
        ["Thu", "57", "79", "sunny"],
        ["Fri", "55", "78", "sunny"],
        ["Sat", "54", "72", "sunny"],
        ["Sun", "52", "75", "sunny"]
    ];

    const hourlyRef = useRef(null);

    useEffect(() => {
        // Automatically scroll the div when the component is mounted
        if (hourlyRef.current) {
            hourlyRef.current.scrollLeft = 516; // Set the scroll position (in pixels)
        }
    }, []); // Empty dependency array means this runs only once, after the first render


    return (
        <div ref={hourlyRef} id="daily-forecast">
            {forecasts.map(([time, tempLow, tempHigh, icon], index) => (
                <>
                    <ForecastSection 
                        key={index} 
                        time={time} 
                        temp={`${tempLow}°-${tempHigh}°`}
                        icon={icon}
                    />
                    <div class="divider"></div>
                </>
            ))}
        </div>        
    )
}   

export default DailyForecast