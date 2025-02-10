import NavLink from "@/components/nav-link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}
export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicios meal created{" "}
          <span className={classes.highlight}> By You</span>{" "}
        </h1>
        <p>say some thing......</p>
        <p className={classes.cta}>
          <NavLink href="/meals/share">Share your favorite recipe</NavLink>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>fetching meals ........</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
