import './Forecast.css'

function ForecastSection({time, temp, icon}) {
    const iconSrcImg = {
        "moon":"./assets/moon.png",
        "partly-cloudy":"/assets/partly-cloudy.png",
        "sunny":"./assets/sunny.png",
        "sunrise":"./assets/sunrise.png",
        "sunset":"./assets/sunset.png",
        "cloudy":"./assets/cloudy.png"
    }
    return (
        <div class="forecast-section">
            <p class="forecast-label" style={time==="Now"?{fontWeight:"600"}:{}}>{time}</p>
            <img class="forecast-icon" src={iconSrcImg[icon]}></img>
            <p class="forecast-temp" style={time==="Now"?{fontWeight:"600"}:{}}>{temp}</p>
        </div>            
    )
}   

export default ForecastSection