import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";


function Calendar() {
    return <div>
        
        <Fullcalendar
        plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
        initialView={'dayGridMonth'}
        headerToolbar={
            {
                start: "title",
                center: "";
                end: "today prev,next"
            }}
        />
    
    </div>
}

export default Calendar;