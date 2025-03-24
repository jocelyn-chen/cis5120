import Widget from "./Widget";
import './Widgets.css'

function WidgetSection({w1title, w1data, w1subdata, w2title, w2data, w2subdata}) {
    return (
        <div className="widget-section">
            <Widget title={w1title} data={w1data} subdata={w1subdata}/>
            <Widget title={w2title} data={w2data} subdata={w2subdata}/>
        </div>
    )
}

export default WidgetSection