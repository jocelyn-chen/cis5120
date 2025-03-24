import './ScrollableArea.css'
import DayOverview from './DayOverview'
import QuickInfoBar from './QuickInfoBar'
import HourlyForeastBox from './HourlyForecastBox'
import DailyForecastBox from './DailyForecastBox'
import WidgetSection from './WidgetSection'

function ScrollableArea() {
    return (
        <div id="scrollable-area">

            <p id="location">Philadelphia</p>

            <DayOverview/>   
            <QuickInfoBar/>
            <HourlyForeastBox/>
            <DailyForecastBox/>
            <WidgetSection w1title="UV INDEX" w1data="3" w1subdata="Low"
                            w2title="HUMIDITY" w2data="37%"/>
            <WidgetSection w1title="FEELS LIKE" w1data="70°" w1subdata="Actual: 72°"
                            w2title="PRECIPITATION" w2data="0" w2subdata="Today"/>

        </div>                   
    )
}   

export default ScrollableArea