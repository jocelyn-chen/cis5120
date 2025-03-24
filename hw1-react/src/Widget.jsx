import './Widgets.css'

function Widget({title,data,subdata}) {
    return (
        <div class="widget">
            <p class="widget-title">{title}</p>
            <p class="widget-data">{data}</p>
            <p class="widget-subdata">{subdata}</p>
        </div>
    )
}

export default Widget