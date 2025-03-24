import './Forecast.css'
import HourlyForecast from "./HourlyForecast";

function HourlyForeastBox() {
    return (
        <div id="hourly-forecast-box">
            <p class="header">HOURLY FORECAST</p>
            <HourlyForecast/>
        </div>
    )
}

export default HourlyForeastBox