import React from "react";
import { useRouteLoaderData } from "react-router";
import Eventitem from "./EventItem";
const EventDetailPage = () => {
  const data = useRouteLoaderData("event-id");
  return <Eventitem event={data.event} />;
};

export async function loader({ request, params }) {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "could not fetch the eventdetail" }),
      { status: 500 }
    );
  } else {
    return response;
  }
}

export default EventDetailPage;
