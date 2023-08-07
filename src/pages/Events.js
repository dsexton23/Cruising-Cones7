import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";



function Events() {
  const events = [
    {
      title: "The Event",
      start: "2023-09-09T08:00:00",
      end: "2023-09-10T08:00:00"
    },
  ]

    return <div>
        
        <Fullcalendar
        plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
        initialView={'dayGridMonth'}
        headerToolbar={
            {
                start: "title",
                center: "",
                end: "today prev,next"
            }}
          height={"90vh"}
          events={events}
        />
    
    </div>
}

export default Events;