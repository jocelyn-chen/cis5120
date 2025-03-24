import './Forecast.css'
import DailyForecast from "./DailyForecast";

function DailyForecastBox() {
    return (
        <div id="daily-forecast-box">
            <p class="header">10 DAY FORECAST</p>
            <DailyForecast/>
        </div>
    )
}

export default DailyForecastBox