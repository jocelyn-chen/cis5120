import './DayOverview.css'
import DaySection from './DaySection'

function DayOverview() {
    const times_and_temps = [["Morning", "53"], ["Day", "72"], ["Evening", "65"]]
    return (
        <div id="day-overview">
            {times_and_temps.map(([time, temp], index) => (
                <DaySection 
                    key={index} 
                    time={time} 
                    temp={temp} 
                    id={index === 1 ? "main-section" : ""}
                />
            ))}
                
        </div>      
    );
}

export default DayOverview