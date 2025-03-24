import './QuickInfoBar.css'

function InfoBarSection({title,data}) {
    return (
        <div class="info-bar">
            <p class="info-bar-title">{title}</p>
            <p class="info-bar-data">{data}</p>
        </div> 
    );
}

export default InfoBarSection