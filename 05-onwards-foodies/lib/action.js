"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  // Basic validation
  if (
    !meal.creator ||
    !meal.creator_email ||
    !meal.title ||
    !meal.summary ||
    !meal.instructions ||
    !meal.image
  ) {
    return { error: "All fields are required." };
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(meal.creator_email)) {
    return { error: "Invalid email address." };
  }

  await saveMeal(meal);
  redirect("/meals");
  return { success: true };
}
