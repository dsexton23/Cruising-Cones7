import React from "react";
// import Fullcalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
import "../styles/Events.css"
// import eventFormatter from "../components/eventFormatter";



function Events() {
  // const events = [
  //   // {
  //   //   name: "The Event",
  //   //   dates: "2023-09-09T08:00:00",
  //   //   location: "Place".
  //   //   photo: ,
  //   //   link: ,
  //   // },


  // ];

    return  (
      <div className="eventList">
        {/* <div 
          className="upcoming-event"
        >
          <h2>Test Event</h2>
          <h3>future date</h3>
          <h3>This location</h3>
        </div>

        <div className="upcoming-event"
        >
          <h2>2nd Event</h2>
          <h3>2nd date</h3>
          <h3>Other location</h3>
        </div> */}

      </div>
      );
        








}

export default Events;





      {/* OLD CALENDAR CODE to go inside the return <div> ... </div> */}
        {/* <Fullcalendar
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
     */}