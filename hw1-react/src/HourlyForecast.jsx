import './Forecast.css'
import ForecastSection from './ForecastSection'
import React, { useEffect, useRef } from 'react';


function HourlyForecast() {
    const forecasts = [
        ["4AM","54","moon"],
        ["5AM","53","moon"],
        ["6AM","56","moon"],
        ["7AM","53","moon"],
        ["7:10AM","Sunrise","sunrise"],
        ["8AM","59","sunny"],
        ["9AM","62","sunny"],
        ["10AM","64","sunny"],
        ["11AM","67","sunny"],
        ["12AM","71","sunny"],
        ["1PM","73","sunny"],
        ["2PM","75","sunny"],
        ["Now","72","sunny"],
        ["4PM","70","sunny"],
        ["5PM","68","sunny"],
        ["6PM","66","partly-cloudy"],
        ["6:31PM", "Sunset", "sunset"],
        ["7PM","66","moon"],
        ["8PM","65","moon"],
        ["9PM","65","moon"],
        ["10PM","63","moon"],
        ["11PM","62","moon"],
        ["12AM","59","moon"],
        ["1AM","57","moon"],
        ["2AM","55","moon"],

    ]

    const hourlyRef = useRef(null);

    useEffect(() => {
        // Automatically scroll the div when the component is mounted
        if (hourlyRef.current) {
            hourlyRef.current.scrollLeft = 519; // Set the scroll position (in pixels)
        }
    }, []); // Empty dependency array means this runs only once, after the first render


    return (
        <div ref={hourlyRef} id="hourly-forecast">
            {forecasts.map(([time, temp, icon], index) => (
                    <ForecastSection 
                        key={index} 
                        time={time} 
                        temp={`${temp}°`}
                        icon={icon}
                    />
            ))}
        </div>        
    )
}   

export default HourlyForecast