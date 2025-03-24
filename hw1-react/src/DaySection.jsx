import './DayOverview.css'

function DaySection({time,temp, id}) {
    return (
        <div class="day-section" style={id === "main-section" ? { marginTop: "0px" } : {}} >
            <p class="day-time" style={id === "main-section" ? { fontSize: "16pt" } : {}}>
                {time}
            </p>
            <p class="day-temp" style={id === "main-section" ? { fontSize: "48pt" } : {}}>{temp}&#xb0;</p>
        </div>
            
    );
}

export default DaySection