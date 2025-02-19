import { NavLink, Outlet } from "react-router";
import classes from "./EventsNavigation.module.css";

function EventsNavigation() {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/events"
                end
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                All Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events/new"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                New Event
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default EventsNavigation;
