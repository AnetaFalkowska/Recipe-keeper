import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FoodImg from "../assets/ramen.png";
import SearchBar from "./SearchBar";

export default function MainNavigation() {
  return (
    <header>
      <nav className={classes.menu}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Recipes
            </NavLink>
          </li>
        </ul>
      </nav>
      <section className={classes["search-section"]}>
        <div className={classes.logo}>
          <img src={FoodImg} alt="ramen" />
          <h1>Recipe keeper</h1>
        </div>
        <SearchBar />
      </section>
    </header>
  );
}
