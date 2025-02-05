import React from "react";
import { useRouteError } from "react-router"; // Correct import

const Error = () => {
  const error = useRouteError();
  console.log(error);

  let message = "An unknown error occurred.";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  } else if (error.status === 404) {
    message = "Could not find the resource.";
  }

  return <div style={{ color: "red", fontSize: "18px" }}>{message}</div>;
};

export default Error;
