"use client";
const error = ({ error }) => {
  return (
    <div className="error">
      <h1>the error is occured</h1>
      <p>Failed to fetch the meals</p>
    </div>
  );
};

export default error;
