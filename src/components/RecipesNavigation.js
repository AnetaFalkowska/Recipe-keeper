import { NavLink } from "react-router-dom";
import classes from "./RecipesNavigation.module.css"

export default function RecipesNavigation() {
  return (
    <header className={classes["recipes-menu"]}>
      <nav>
        <ul>          
          <li><NavLink to="/recipes" className={({isActive})=> isActive ? classes.active : undefined} end>All Recipes</NavLink></li>
          <li><NavLink to="/recipes/new" className={({isActive})=> isActive ? classes.active : undefined} >New Recipe</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
