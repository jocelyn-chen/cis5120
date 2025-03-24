import './QuickInfoBar.css'
import InfoBarSection from './InfoBarSection';

function QuickInfoBar() {
    return (
        <div id="quick-info-bar">
            <div id="sunrise-sunset">
                <div class="sun">
                    <img class="sun-img" src="./assets/sunrise.png"></img>
                    <p class="sun-time">7:10 AM</p>
                </div>
                
                <div class="sun">
                    <img class="sun-img" src="./assets/sunset.png"></img>
                    <p class="sun-time">6:31 PM</p>
                </div>
            </div>

            <InfoBarSection title="AQI" data="78"/>
            <InfoBarSection title="Feels like" data="70&#xb0;"/>

            <div class="info-bar">
                <p class="info-bar-title">Wind</p>
                <div id="wind-data">
                    <p class="info-bar-data">13</p>
                    <div>
                        <p style={{ marginTop: '10px', marginBottom: '0px' }}>mph</p>
                        <p style={{ margin: '0px' }}>SW</p>
                    </div>
                </div>
            </div>

        </div> 
    );
}

export default QuickInfoBar