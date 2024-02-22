import React from "react";
// import Fullcalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
import "../styles/Events.css"
// import eventFormatter from "../components/eventFormatter";
// import SundayFunday from "../assets/SundayFunday.png";
// import VisaliaHomePatio from "../assets/VisaliaHomePatio.png";
import SpringCraft from "../assets/SpringCraftFair.png";
// import PopUp from "../assets/popup127.png";
// import feb18 from "../assets/feb18.png";
import feb25 from "../assets/feb25.png";
import mar17 from "../assets/mar17.png";

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
        <div 
          className="upcoming-event"
        >
        
          {/* <img src={PopUp} alt='Jan27' />
          <img src={SundayFunday} alt='Sunday Funday' />
          <img src={VisaliaHomePatio} alt='Visalia home and patio show' /> */}
  
          <img src={feb25} alt='Modesto popup 2/25' />
          <img src={mar17} alt='St. Patcricks' />
          <img src={SpringCraft} alt='Spring Craft Fair' />


        </div>

        {/* <div className="upcoming-event"
        >
          <h2>2nd Event</h2>
          <h3>2nd date</h3>
          <h3>Other location</h3>
        </div> */}

      </div>
      );
        








}

export default Events;





