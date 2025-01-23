import { useEffect, useState } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchplaces() {
      try {
        const response = await fetch("http://localhost:3000/placesgg");
        if (!response.ok) {
          // Throw an error for failed HTTP responses
          throw new Error("Failed to fetch data: " + response.statusText);
        }
        const resData = await response.json();
        setAvailablePlaces(resData.places);
      } catch (err) {
        setError(err); // Catch and store the error
      }
      setIsFetching(false); // Set fetching state to false
    }
    fetchplaces();
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Places
        title="Available Places"
        places={availablePlaces}
        isLoading={isFetching}
        loadingText="Please wait"
        fallbackText="No places available."
        onSelectPlace={onSelectPlace}
      />
    </>
  );
}
