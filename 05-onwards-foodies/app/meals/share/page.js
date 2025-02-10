import classes from "./page.module.css";
import Image from "next/image";
const page = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill />
        </div>

        <div className={classes.headerText}>
          <h1>Title</h1>
        </div>
      </header>
      <main></main>
    </>
  );
};

export default page;
