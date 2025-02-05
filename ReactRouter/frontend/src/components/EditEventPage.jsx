import React from "react";
import EventForm from "./EventForm";
import { useLoaderData, useRouteLoaderData } from "react-router";
const EditEventPage = () => {
  const data = useRouteLoaderData("event-id");
  const event = data.event;
  return <EventForm event={event} />;
};

export default EditEventPage;
