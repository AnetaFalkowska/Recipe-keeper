import { NavLink } from "react-router-dom";
import classes from "./RecipesNavigation.module.css"

export default function RecipesNavigation() {
  return (
    <div className={classes.header}>
      <nav>
        <ul className={classes.list}>          
          <NavLink to="/recipes" className={({isActive})=> isActive ? classes.active : undefined} end>All Recipes</NavLink>
          <NavLink to="/recipes/new" className={({isActive})=> isActive ? classes.active : undefined} >New Recipe</NavLink>
        </ul>
      </nav>
    </div>
  );
}
