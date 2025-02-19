import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import EventsList from "./components/EventsList";
function EventsPage() {
  const events = useLoaderData();
  return <>{<EventsList events={events} />}</>;
}

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "could not fetch the events" }),
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export default EventsPage;
