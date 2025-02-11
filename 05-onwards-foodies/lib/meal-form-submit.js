"use client";

import { useFormStatus } from "react-dom";

export const MealFormSubmit = () => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit">
      {pending ? "Submmiting..." : "Save Meal"}
    </button>
  );
};
