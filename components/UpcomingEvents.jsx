"use client";
import React, {useContext, useEffect, useState} from "react";

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { EventContext } from "@/contexts/EventContext";

//components
import Link from "next/link";
import Image from "next/image";
import Event from "./Events/Event";
import SkeletonGrid from "./SkeletonGrid";

const UpcomingEvents = () => {
    const {events} = useContext(EventContext);
    const [eventValue, setEventValue] = useState("all");
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(()=> {
        const filterEvents = ()=> {
        if (eventValue === "all") {
            setFilteredEvents(events);
        } else {
            const result = events.filter((event) => event.type === eventValue);
            setFilteredEvents(result);
        }
    }

    filterEvents();
    },[eventValue, events]);
    
  return (
    <section>
    <div>
        <Tabs value={eventValue} onValueChange={setEventValue}>
            <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="sport">Sport</TabsTrigger>
                <TabsTrigger value="music">Music</TabsTrigger>
                <TabsTrigger value="food">Food</TabsTrigger>
                <TabsTrigger value="art">Art</TabsTrigger>
            </TabsList>
        </Tabs>
    </div>
    {/* slider */}
    {filteredEvents.length > 0 ? (
        <Swiper>
            {filteredEvents.map((event, index) => (
            <SwiperSlide key={index}>
                <Link href="">
                    <Event event={event}/>
                </Link> 
            </SwiperSlide>
        ))}
        </Swiper>
    ) : (
        <SkeletonGrid itemCount={4}/>
    )}
    </section>
  )
};

export default UpcomingEvents;