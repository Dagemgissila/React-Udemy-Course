import Link from "next/link";
import ImgLogo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import NavLink from "./nav-link";
export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={ImgLogo} alt="" />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meal</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
