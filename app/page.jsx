"use client";

import { EventContext } from "@/contexts/EventContext";
import { useContext } from "react";

//components
import Hero from "@/components/Hero";
import EventList from "@/components/Events/EventList";
import UpcomingEvents from "@/components/UpcomingEvents";

const Home = () => {
  const {showEventList} = useContext
  (EventContext);
  //console.log(showEventList);
  
  return (
  <div>
    <Hero/>
    <div className="flex flex-col justify-center items-center">
      
     
    </div>
      {showEventList ? (
    <div className="container mx-auto">
      <EventList/>
      </div>
      ) : (
        <div>
          <div className="container mx-auto">
        {/* upcoming events slider */}
        <UpcomingEvents/>
      {/* download add section */}
      <div>download app section</div>
      {/* recommend */}
      <div>recommended event slider</div>
          </div>
      </div>
      )}
    </div>
    )
};

export default Home;